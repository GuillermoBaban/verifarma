<template>
  <div>
    <h2>Hola soy el ID {{ id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi
      et tenetur, cupiditate nostrum ut eligendi expedita perferendis repellat
      ea.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped></style>
