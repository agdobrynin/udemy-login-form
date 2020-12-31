import http from "@/services/core/http";

export const URL_REGISTRATION = "/auth/signup";
/**
 * Registration user.
 *
 * @param {Object} regUser
 * @param {String} regUser.email
 * @param {String} regUser.password
 * @param {String} regUser.nickname
 * @param {String} regUser.fist_name
 * @param {String} regUser.last_name
 * @param {String} regUser.phone
 * @param {String} regUser.gender_orientation
 * @param {String} regUser.city
 * @param {String} regUser.country
 * @param {String} regUser.birthday.date_of_birth_day
 * @param {String} regUser.birthday.date_of_birth_month
 * @param {String} regUser.birthday.date_of_birth_year
 *
 * @returns {Promise<any>}
 */
export async function registration(regUser) {
    try {
        const regUserBody = JSON.stringify(regUser);

        return await http.post(URL_REGISTRATION, regUserBody);
    } catch (error) {
        return Promise.reject(error?.response?.data || error);
    }
}
