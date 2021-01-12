import http from "@/services/core/http";
import api from "@/config/api";

/**
 * Fetch Countries.
 */
export default async function fetchCountries() {
    try {
        return await http.get(api.countries);
    } catch (error) {
        return Promise.reject(new Error(error?.response?.data?.message || error?.message));
    }
}
