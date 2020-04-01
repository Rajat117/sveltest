import { writable } from 'svelte/store';

export const login = writable({
    loginFlag: false
});

export const register = writable({
    registerFlag: false
});

export const jwt = writable({});


