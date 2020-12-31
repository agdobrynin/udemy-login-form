export const AUTH_TOKEN_LOCAL_KEY = "APP-LOGIN_FORM-TOKEN";

/**
 * Save token to localstorage.
 * @param {String} token
 */
export function storeToken(token) {
    localStorage.setItem(AUTH_TOKEN_LOCAL_KEY, token);
}

/**
 * Get saved token
 * @returns {string|null}
 */
export function getToken() {
    return  localStorage.getItem(AUTH_TOKEN_LOCAL_KEY);
}

/**
 * Remove storage token.
 */
export function resetToken() {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_KEY);
}