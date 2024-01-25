<template>
  <div class="bg-current">
    <div class="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-1 text-center">
      <div
        v-for="movie of movies"
        :key="movie.imdbID"
        class="flex flex-col items-center my-4"
      >
        <NuxtImg
          :src="movie.Poster"
          sizes="300vw sm:100vw md:90vw"
          @click="() => $router.push(`/movies/${movie.imdbID}`)"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const response = await useFetch(
  "https://www.omdbapi.com/?apikey=e1bc6be5&s=movie&type=movie&page=1&r=json"
);
const movies = response.data._rawValue.Search;
</script>

<style scoped></style>
