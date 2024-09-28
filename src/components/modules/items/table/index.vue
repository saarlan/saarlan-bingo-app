<template>
  <v-data-table-server>
    <template #item="{ item }">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero obcaecati esse inventore labore repellat,
      asperiores, suscipit quasi magnam tempore dolor rem quos itaque enim veritatis cum necessitatibus sequi illo non.
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import { TableHeader } from '~/types/table';

const tableHeaders: TableHeader[] = [
  { key: 'name', title: 'Name', sortable: true, hideable: false },
  { key: 'actions', title: '', sortable: false, align: 'center', hideable: false },
];

defineProps<{ height: number }>();

const table = useTable<any>({
  name: 'actions',
  endpoint: '/actions',
  headers: tableHeaders,
  defaultSort: [{ key: 'name', order: 'asc' }],
  where: { name: { not: 'NULL' } },
  include: { rules: { include: { rule: true } } },
});
const { columnsToShow, headers, loading, totalItems, items, page, itemsPerPage, sortBy } = toRefs(table);
</script>
