<template>
  <div v-for="index in 5" class="py-2 bg-primary">
    <SwiperMovies :page="index + 1" />
  </div>
</template>

<script>
import SwiperMovies from "~/components/SwiperMovies.vue";

export default {
  components: { SwiperMovies },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
