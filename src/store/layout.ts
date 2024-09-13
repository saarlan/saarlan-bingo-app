import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const title = ref<string>('Rules');
  const drawerOpen = ref<boolean>(true);

  const toggleDrawer = () => {
    drawerOpen.value = !drawerOpen.value;
  };

  watch([() => title.value], () => {
    document.title =
      title.value === 'Smarthome Rule Management' ? title.value : `${title.value} • Smarthome Rule Management`;
  });

  return { title, drawerOpen, toggleDrawer };
});
