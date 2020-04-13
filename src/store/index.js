import { writable } from 'svelte/store';

export const login = writable({
    loginFlag: false,
    user: {}
});

export const _user = writable(JSON.parse(localStorage.getItem("user")) || {});

export const register = writable({
    registerFlag: false
});

export const _changePassword = writable({
    changePasswordFlag: false
})



