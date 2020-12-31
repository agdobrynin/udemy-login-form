import http from "@/services/core/http";

export const URL_CITIES = "/location/get-cities";

/**
 * Fetch Cities.
 * @param {string} countryId
  */
export async function fetchCities(countryId) {
    try {
        return await http.get(`${URL_CITIES}/${countryId}`);
    } catch (error) {
        return Promise.reject(new Error(error?.response?.data?.message || error?.message));
    }
}
