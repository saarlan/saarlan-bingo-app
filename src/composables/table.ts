import { computed, inject, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { TableOptions } from '~/types/table';
import { useStorage } from '@vueuse/core';
import { useRouteQuery } from '@vueuse/router';
import qs from 'qs';
import { useApi } from './api';
import { Paginated } from '~/types/api/pagination';
import { EventBus } from '~/symbols';

const defaultItemsPerPage = 25;

export const useTable = <T extends { id: string }>(options: TableOptions<T>) => {
  const { name, endpoint } = options;

  //#region headers
  const columnsToShow = useStorage<string[]>(
    `table-${name}-columns`,
    options.headers.map((x) => x.key).filter(Boolean) as string[],
  );

  const headers = computed(() => {
    return options.headers.filter((x) => x.key && columnsToShow.value.includes(x.key));
  });
  //#endregion

  //#region query options
  const page = ref<number>(1);
  const queryPage = useRouteQuery('page', '1', { transform: Number });
  const itemsPerPage = useStorage<number>(
    `table-${name}-itemsPerPage`,
    options.defaultItemsPerPage ?? defaultItemsPerPage,
  );
  const sortBy = useStorage<any[]>(`table-${name}-sort`, options.defaultSort ?? []);
  const filter = ref<any>(options.where);

  // update route query when page changes
  watch(page, () => {
    queryPage.value = page.value;
  });

  /** The query based on the current table options */
  const query = computed(() => {
    const sort = sortBy.value
      .filter((x) => x.order !== undefined)
      .map((x) => ({ [x.key]: x.order === 'true' || x.order === 'asc' ? 'asc' : 'desc' }));

    return qs.stringify({
      page: page.value,
      perPage: itemsPerPage.value,
      orderby: sort,
      where: filter.value,
      include: options.include,
    });
  });
  //#endregion

  //#region data
  const items = ref<T[]>([] as T[]);
  const totalItems = ref<number>(0);
  const loading = ref<boolean>(false);
  //#endregion

  /**
   * Initialize table.
   */
  const initialize = async () => {
    await refresh();
    page.value = queryPage.value;
  };

  /**
   * Refresh table.
   */
  const refresh = async () => {
    try {
      loading.value = true;

      const res = await useApi().get<Paginated<T>>(`${endpoint}?${query.value}`);
      totalItems.value = res.data.meta.itemCount;
      items.value = res.data.items as any;
    } catch (err) {
      //
    } finally {
      loading.value = false;
    }
  };

  const updateRow = (row: Partial<T> & { id: any }) => {
    for (let i = 0; i < items.value.length; i++) {
      if (items.value[i].id === row.id) {
        items.value[i] = { ...items.value[i], ...row };
        break;
      }
    }
  };

  // refresh table when query changes
  watch(query, refresh, { deep: true });

  //#region events
  const bus = inject(EventBus)!;
  onMounted(() => {
    bus.on('tableRefresh', refresh);
    bus.on('tableUpdateFilter', (value) => {
      filter.value = value;
    });
  });
  onBeforeUnmount(() => {
    bus.off('tableRefresh');
    bus.off('tableUpdateFilter');
  });

  watch(totalItems, () => {
    bus.emit('tableUpdateItemCount', totalItems.value);
  });
  //#endregion

  return {
    columnsToShow,
    headers,
    page: page,
    itemsPerPage: itemsPerPage,
    sortBy: sortBy,
    items: items,
    totalItems: totalItems,
    loading: loading,
    filter: filter,
    initialize,
    refresh,
    updateRow,
  };
};
