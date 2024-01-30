<template>
  <div class="bg-primary">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "~/components/LoginForm.vue";

export default {
  components: { LoginForm },
  data() {
    return {};
  },

  async beforeMount() {
    definePageMeta({ auth: false });
    const { status } = useAuth();
    if (status.value === "authenticated") {
      this.$router.push("/movies");
    }
  },
};
</script>

<style scoped></style>
