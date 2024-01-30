<template>
  <div>
    <div class="relative">
      <div class="flex justify-between items-center">
        <header>
          <nav class="flex items-center">
            <ul class="flex space-x-4">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
            </ul>
          </nav>
        </header>
        <div class="pr-3 relative">
          <button @click="() => (showMenu = !showMenu)">
            <Icon name="material-symbols:person" color="black" />
          </button>
          <div
            v-if="showMenu"
            class="absolute right-0 mt-2 bg-white p-4 w-300px border border-gray-300 z-10"
          >
            <button>Logout</button>
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
};
</script>
