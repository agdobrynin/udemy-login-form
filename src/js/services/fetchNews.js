import http from "@/services/core/http";
import api from "@/config/api";

/**
 * Fetch news.
 */
export default async function fetchNews() {
    try {
        return await http.get(api.news);
    } catch (error) {
        return Promise.reject(error?.response?.data || error);
    }
}
