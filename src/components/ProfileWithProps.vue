<template>
  <h2>Profile With Props</h2>
  <h3>Nombres: {{ name }}, Edad: {{ age }}</h3>
</template>

<script>
export default {
  name: "Profile With Props",
  props: {
    name: String,
    age: Number,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
