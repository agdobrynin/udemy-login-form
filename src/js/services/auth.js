import http from "@/services/core/http";
import api from "@/config/api";

/**
 * Auth user.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Promise<any>}
 */
export default async function loginAction(email, password) {
    try {
        const authBody = JSON.stringify({ email, password });

        return await http.post(api.auth, authBody);
    } catch (error) {
        return Promise.reject(error?.response?.data || error);
    }
}
