import { baseurl } from "../const";

export async function getUserInfo() {
    try {
        const userData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt")
            },
            mode: "cors"
        };
        const userRes = await fetch(`${baseurl}/api/me`, userData);
        return userRes;
    } catch (error) {
        throw error;
    }
}

export async function createRefreshTokenInterval() {
    try {
        const _body = {
            refresh: localStorage.getItem('refresh_jwt')
        }
        const userData = {
            method: "POST",
            body: JSON.stringify(_body),
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors"
        };
        const res = await fetch(`${baseurl}/api/refresh-token`, userData);
        const data = await res.json();
        if (!res.ok || !data.access) {
            throw new Error();
        }
        const intervalKey = setInterval(createRefreshTokenInterval, 4 * 60 * 1000)
        localStorage.setItem('intervalKey', intervalKey);
        localStorage.setItem("jwt", data.access);
    } catch (error) {
        clearRefreshTokenInterval();
        window.location.reload();
    }
}

export function logout() {
    localStorage.clear();
}

export function clearRefreshTokenInterval() {
    if (window && window.localStorage.getItem('intervalKey')) {
        clearInterval(localStorage.getItem('intervalKey'));
        localStorage.clear()
    }
}