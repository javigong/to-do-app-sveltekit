import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')!) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('st-todo-list', JSON.stringify(value));
	}
});

export const addTodo = () => {
	todos.update((currentTodos) => {
		return [...currentTodos, { id: uuidv4(), text: '', complete: false }];
	});
};

export const deleteTodo = (id: string = uuidv4()) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo: { id: string }) => todo.id !== id);
	});
};

export const toggleComplete = (id: string = uuidv4()) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo: { id: string; complete: boolean }) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
	});
};

export const editTodo = (id: string = uuidv4(), text: string) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo: { id: string }) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
	});
};
