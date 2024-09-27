<template>
  <v-navigation-drawer :permanent="!mobile" v-model="layoutStore.drawerOpen">
    <v-list>
      <v-list-subheader>Administration</v-list-subheader>
      <v-list-item density="compact" :to="{ name: Routes.Events }" :prepend-icon="IconCalendar"> Events </v-list-item>
      <v-list-item density="compact" :to="{ name: Routes.Items }" :prepend-icon="IconPhotoScan"> Items </v-list-item>
    </v-list>

    <template #append>
      <sidebar-version-info />
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { IconCalendar, IconPhotoScan } from '@tabler/icons-vue';
import { Routes } from '~/router/routes';
import { useDisplay } from 'vuetify';

const layoutStore = useLayoutStore();
const { mobile } = useDisplay();
</script>
