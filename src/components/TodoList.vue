<script setup lang="ts">
import { inject } from "vue";

import { todosKey, addTodoKey } from "../useTodo";

const todos = inject(todosKey, []);

const addTodo = inject(addTodoKey, (title: string) => {});

const handleAddClick = (title: string) => {
  addTodo(title);
};
</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >
        {{ todo.title }}
      </li>
    </ul>
    <button @click="handleAddClick('add!')">Add</button>
  </div>
</template>

<style scoped></style>
