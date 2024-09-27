import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const title = ref<string>('Rules');
  const drawerOpen = ref<boolean>(true);

  const toggleDrawer = () => {
    drawerOpen.value = !drawerOpen.value;
  };

  watch([() => title.value], () => {
    document.title = title.value === 'SaarLAN Bingo' ? title.value : `${title.value} • SaarLAN Bingo`;
  });

  return { title, drawerOpen, toggleDrawer };
});
