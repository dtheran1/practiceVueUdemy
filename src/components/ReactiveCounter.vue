<template>
  <h1>Reactive Counter</h1>

  <h2>{{ counter }}</h2>
  <h2>{{ counterComputed }}</h2>

  <button @click="increment">Incrementar</button>
  <button @click="decrement">Disminuir</button>
</template>

<script>
import { reactive, computed, toRefs } from "vue";
export default {
  name: "Reactive Counter",
  setup() {
    const data = reactive({
      counter: 0,
      counterComputed: computed(() => {
        return `El valor de Counter es ${data.counter}`;
      }),
    });

    const increment = () => {
      data.counter++;
    };
    const decrement = () => {
      data.counter--;
    };
    return { ...toRefs(data), increment, decrement };
  },
};
</script>

<style></style>
