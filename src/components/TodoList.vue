<template>
  <h2>Lista de tareas</h2>

  <label for="todo">Todo</label><br />
  <input type="text" id="todo" v-model="todo" @keypress.enter="addTodo" />

  <ul>
    <li v-for="(todo, indexTodo) in todos" :key="indexTodo">
      {{ todo }}
      <span @click="deleteTodo(indexTodo)"> X</span>
    </li>
  </ul>
</template>

<script>
import useTodos from "@/composable/useTodos";
export default {
  name: "TodoList",
  setup() {
    const { todo, todos, addTodo, deleteTodo } = useTodos();

    return { todo, todos, addTodo, deleteTodo };
  },
};
</script>

<style></style>
