import fetchCountries from "@/services/fetchCountries";
import FormUI from "@/config/formUI";
import makeAutocomplete from "@/helpers/autocomplete";
import onSubmitRegistration from "@/Handlers/onSubmitRegistration";
import { removeValidateClass } from "@/helpers/helpers";
import { setLoading, unsetLoading } from "@/helpers/formActions";
import appPage from "@/config/appPage";
import fetchCities from "@/services/fetchCities";
import { notifyError } from "@/helpers/notofication";

let countries;
const cities = [];

/**
 * @param {Event} event
 * @returns {Promise<void>}
 */
async function onChangeCountry(event) {
    try {
        setLoading(appPage.loaderDiv);
        const countryName = event.target.value;
        const { city } = FormUI.formReg.elements;
        if (!Object.values(countries).includes(countryName)) {
            // eslint-disable-next-line no-param-reassign
            event.target.value = "";
            city.value = "";
            city.setAttribute("disabled", "disabled");
            throw new Error(`Country "${countryName}" not found!`);
        }

        if (cities[countryName] === undefined) {
            const foundCountry = Object.entries(countries).find(([, country]) => country === countryName);
            const countryId = foundCountry[0] || "";
            if (countryId === "") {
                throw new Error(`Country Id not found by name "${countryName}"`);
            }
            cities[countryName] = await fetchCities(countryId);
        }

        makeAutocomplete(city, cities[countryName]);
        city.removeAttribute("disabled");
        city.focus();
    } catch (e) {
        notifyError(e.message);
    } finally {
        unsetLoading(appPage.loaderDiv);
    }
}

export default async function initRegForm() {
    // get countries with await
    if (countries === undefined) {
        countries = await fetchCountries();
        const { country } = FormUI.formReg.elements;
        makeAutocomplete(country, Object.values(countries));
        FormUI.formReg.elements.country.addEventListener("change", await onChangeCountry);
        FormUI.formReg.addEventListener("submit", onSubmitRegistration);
        Array.from(FormUI.formReg.elements)
            .forEach((input) => input.addEventListener("focus", (event) => removeValidateClass(event.target)));
    }
}
