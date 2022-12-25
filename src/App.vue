<script setup lang="ts">
import { provide } from "vue";

import TodoList from "./components/TodoList.vue";
import { todosKey, todos, addTodoKey, addTodo } from "./useTodo";

provide(todosKey, todos.value);
provide(addTodoKey, addTodo);
</script>

<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
