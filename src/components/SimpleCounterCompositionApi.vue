<template>
  <h2>Simple Counter Composition API</h2>
  <h2>{{ counter }}</h2>
  <h2>{{ counterComputed }}</h2>

  <button @click="increment">Incrementar</button>
  <button @click="decrement">Disminuir</button>
</template>

<script>
import useCounter from "@/composable/useCounter";
export default {
  name: "Simple Counter Composition",
  setup() {
    const { counter, counterComputed, decrement, increment } = useCounter();

    return { counter, counterComputed, decrement, increment };
  },
};
</script>

<style></style>
