<template>
  <h1 style="text-align: center">SaarLAN Bingo</h1>
  <div
    style="
      border: 1px solid white;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      height: 500px;
      width: 500px;
    "
  >
    <div class="tile" v-for="item in items">
      {{ item.picture }}
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
  { picture: 'X' },
]);
</script>
<style lang="scss">
.tile {
  border: 1px solid white;
  display: grid;
  align-content: center;
  justify-content: center;
}
</style>
