import { writable } from 'svelte/store';

export const playToken = writable(0);
export const stopToken = writable(0);
export const revToken = writable(0);