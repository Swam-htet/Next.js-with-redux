import type { ReduxState } from '@/lib/redux'

export const selectTodo = (state: ReduxState) => state.todo.todos
