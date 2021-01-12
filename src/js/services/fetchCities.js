import http from "@/services/core/http";
import api from "@/config/api";

/**
 * Fetch Cities.
 * @param {string} countryId
  */
export default async function fetchCities(countryId) {
    try {
        return await http.get(`${api.cities}/${countryId}`);
    } catch (error) {
        return Promise.reject(new Error(error?.response?.data?.message || error?.message));
    }
}
