import { ref, computed } from "vue";

export default function () {
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
}
