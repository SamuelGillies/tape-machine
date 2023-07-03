import { writable } from 'svelte/store';

export const playToken = writable(0);
export const stopToken = writable(0);
export const revToken = writable(0);
export const tapeItem = writable(0);
export const tapeSpeed = writable(1);
export const tapePosMin = writable(0.3); 
export const tapePosMax = writable(0.7); 