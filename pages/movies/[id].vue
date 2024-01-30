<template>
  <div class="bg-primary text-white text-center p-2" style="height: 100vh">
    <NuxtImg
      placeholder
      style="width: 100%; max-width: 500px; margin: auto"
      sizes="100vw"
      :src="movie.Poster"
      :alt="movie.Title"
    />
    <h1 class="font-medium text-2xl my-3">{{ movie.Title }}</h1>
    <p>
      {{ movie.Genre }}
    </p>
    <p>IMDb: {{ movie.imdbRating }}</p>
    <p>Premios: {{ movie.Awards }}</p>
    <p class="indent-1">
      {{ movie.Plot }}
    </p>
  </div>
</template>

<script>
export default {
  async setup() {
    const runtimeConfig = useRuntimeConfig();
    const { id } = useRoute().params;
    const response = await useFetch(
      `https://www.omdbapi.com/?apikey=${runtimeConfig.public.apiSecret}&i=${id}`
    );
    return {
      movie: response.data._rawValue,
    };
  },
};
</script>
<style scoped></style>
