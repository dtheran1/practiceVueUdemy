<template>
  <h1>Watch Counter</h1>

  <h2>{{ counter }}</h2>
  <h2>{{ counter2 }}</h2>
  <h3>
    {{ message }}
  </h3>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Disminuir</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Watch Counter",
  setup() {
    const counter = ref(0);
    const counter2 = ref(0);

    const message = ref("");

    watch([counter], () => {
      if (counter.value === 5) {
        message.value = "Counter es 5";
        counter2.value = 10;
      } else {
        message.value = "";
        counter2.value = 0;
      }
    });

    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };
    return { counter, message, decrement, increment, counter2 };
  },
};
</script>

<style></style>
