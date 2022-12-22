import { ref, InjectionKey } from "vue";

export type Todo = {
  id: number;
  title: string;
};

export const todosKey: InjectionKey<Todo[]> = Symbol();

const defaultTodos: Todo[] = [
  { id: 0, title: "first" },
  {
    id: 1,
    title: "second",
  },
];

export const todos = ref<Todo[]>(defaultTodos);
