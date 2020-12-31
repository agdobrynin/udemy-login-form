import http from "@/services/core/http";

export const URL_NEWS = "/news";
/**
 * Fetch news.
 *
 * @param {String} email
 * @param {String} password
 * @returns {Promise<any>}
 */
export async function fetchNews() {
    try {
        return await http.get(URL_NEWS);
    } catch (error) {
        return Promise.reject(error?.response?.data || error);
    }
}
