import http from "@/services/core/http";

export const URL_AUTH = "/auth/login";
/**
 * Auth user.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Promise<any>}
 */
export async function loginAction(email, password) {
    try {
        const authBody = JSON.stringify({ email, password });

        return await http.post(URL_AUTH, authBody);
    } catch (error) {
        return Promise.reject(error?.response?.data || error);
    }
}
