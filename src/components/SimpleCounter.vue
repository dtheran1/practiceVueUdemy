<template>
  <h2>Contador Sencillo</h2>
  <p>{{ counter }}</p>
  <h1>{{ counterComputed }}</h1>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Disminuir</button>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "SimpleCounter",
  setup() {
    const counter = ref(0);

    const counterComputed = computed(() => {
      return `El Valor de Counter es ${counter.value}`;
    });

    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };
    return { counter, increment, decrement, counterComputed };
  },
};
</script>

<style></style>
