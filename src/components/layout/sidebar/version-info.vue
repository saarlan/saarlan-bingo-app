<template>
  <v-row no-gutters style="padding: 20px 8px 4px" class="text-grey text-body-2">
    <v-col :cols="6" class="monospace">App Version</v-col>
    <v-col :cols="6" style="text-align: right" class="monospace">
      {{ appStore.version }}
    </v-col>

    <v-col :cols="6" class="monospace">API Version</v-col>
    <v-col :cols="6" style="text-align: right" class="monospace">
      {{ apiVersion ?? 'offline' }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const appStore = useAppStore();

const apiVersion = ref<string | null>(null);

onBeforeMount(async () => {
  try {
    const res = await useApi().get('/health');
    apiVersion.value = `v${res.data.version}`;
  } catch (err) {
    apiVersion.value = null;
  }
});
</script>
