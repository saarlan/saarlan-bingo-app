<template>
  <Teleport v-if="isMounted" :to="to">
    <slot></slot>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ to: string }>();

const isMounted = ref<boolean>(false);

onMounted(() => {
  nextTick().then(() => {
    isMounted.value = true;
  });
});
</script>
