<template>
  <div class="min-h-screen flex items-center justify-center px-3">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >Email:</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="email@example.com"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password:</label
          >
          <input
            type="password"
            v-model="password"
            class="w-full p-2 border rounded"
            required
            id="password"
            placeholder="••••••••"
          />
        </div>
        <div class="flex justify-evenly">
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          <button
            @click="handleGithub"
            type="button"
            class="bg-blue-500 px-4 py-2 rounded"
          >
            <p class="text-white">Sign in with GitHub</p>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleGithub() {
      const { signIn } = useAuth();
      signIn("github", { callbackUrl: "/movies" });
    },
    async login() {
      const { signIn } = useAuth();
      await signIn("credentials", {
        email: this.email,
        password: this.password,
        callbackUrl: "/movies",
      });
    },
  },
};
</script>
