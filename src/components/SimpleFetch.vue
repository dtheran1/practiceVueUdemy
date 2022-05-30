<template>
  <h2>Simple Fetch</h2>
  <ul v-if="users">
    <li v-for="user in users" :key="user">
        {{user.name}}
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Simple Fetch",
  setup() {
    const users = ref(null);

    onMounted(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      users.value = await response.json();
    });

    return { users };
  },
};
</script>

<style></style>
