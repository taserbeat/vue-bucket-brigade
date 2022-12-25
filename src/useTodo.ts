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

export const addTodoKey: InjectionKey<(title: string) => {}> = Symbol();

/** Todoを追加する関数 */
export const addTodo = (title: string) => {
  const newTodo: Todo = {
    id: Math.random(),
    title: title,
  };

  todos.value.push(newTodo);
};
