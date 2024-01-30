<template>
  <div>
    <Swiper :slides-per-view="slidesPerView" :loop="true" :effect="'creative'">
      <SwiperSlide v-for="movie of movies" :key="movie.imdbID">
        <NuxtImg
          placeholder
          :src="movie.Poster"
          sizes="100vw"
          @click="() => $router.push(`/movies/${movie.imdbID}`)"
          class="cursor-pointer px-2"
          :alt="movie.Title"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slidesPerView: 5,
    };
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  async setup(props) {
    const runtimeConfig = useRuntimeConfig();

    const response = await useFetch(
      `https://www.omdbapi.com/?apikey=${runtimeConfig.public.apiSecret}&s=movie&type=movie&page=${props.page}`
    );
    return {
      movies: response.data._rawValue.Search,
    };
  },

  methods: {
    handleResize() {
      this.slidesPerView = window.innerWidth < 900 ? 3 : 5;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
