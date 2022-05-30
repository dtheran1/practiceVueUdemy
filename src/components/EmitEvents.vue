<template>
  <h2>Emit Event</h2>

  <label for="newMessage"> Mensaje</label>
  <input type="text" id="newMessage" v-model="message" />

  <button @click="$emit=('notify', message)">Notificar al Componente Padre</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Emit Event",
  emits: ["notify"],
  setup(_, { emit }) {
    const message = ref("");
    const notify = () => {
      emit("notify", message.value);
    };
    return { message, notify };
  },
};
</script>

<style></style>
