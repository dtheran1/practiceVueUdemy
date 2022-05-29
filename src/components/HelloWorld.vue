<template>
  <h1>Hola Mundo</h1>

  <p>{{ message }}</p>

  <label for="message"> Mensaje </label>
  <input id="message" v-model="message" type="text" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    console.log("Hola");
    const message = ref("");

    return { message };
  },
};
</script>

<style></style>
