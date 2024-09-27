<template>
  <v-app-bar density="comfortable" color="primary">
    <v-app-bar-nav-icon @click="layoutStore.toggleDrawer">
      <IconMenu2 :size="20" />
    </v-app-bar-nav-icon>

    <v-app-bar-title>
      <RouterLink :to="{ name: Routes.Index, replace: true }" style="color: inherit; text-decoration: inherit">
        SaarLAN Bingo
      </RouterLink>
    </v-app-bar-title>

    <div id="navbar-actions" style="margin-right: 8px"></div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { IconMenu2 } from '@tabler/icons-vue';
import { Routes } from '~/router/routes';

const layoutStore = useLayoutStore();
</script>
