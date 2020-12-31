import http from "@/services/core/http";

export const URL_COUNTRIES = "/location/get-countries";

/**
 * Fetch Countries.
 */
export async function fetchCountries() {
    try {
        return await http.get(URL_COUNTRIES);
    } catch (error) {
        return Promise.reject(new Error(error?.response?.data?.message || error?.message));
    }
}
