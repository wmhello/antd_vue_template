let Token = 'Access_Token'
export function setToken(value) {
    window.localStorage.setItem(Token, value)
}

export function getToken() {
    window.localStorage.getItem(Token)
}

export function removeToken() {
    window.localStorage.removeItem(Token)
}


