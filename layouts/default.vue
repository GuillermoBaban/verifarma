<template>
  <div>
    <div class="relative bg-primary">
      <div class="flex justify-between items-center">
        <header>
          <nav class="flex items-center">
            <ul class="flex space-x-4">
              <li class="pl-1">
                <NuxtLink to="/movies"
                  ><Icon color="white" name="ic:baseline-home"></Icon
                ></NuxtLink>
              </li>
            </ul>
          </nav>
        </header>
        <div class="pr-1 relative">
          <button @click="() => (showMenu = !showMenu)">
            <Icon name="material-symbols:person" color="white" />
          </button>
          <div
            v-if="showMenu"
            class="absolute right-0 bg-white p-4 w-300px border border-gray-300 z-10"
          >
            <button @click="signOut">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    async signOut() {
      const { signOut } = useAuth();
      await signOut();
      this.$router.push("/");
    },
  },
};
</script>
