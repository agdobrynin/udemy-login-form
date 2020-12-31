import {hideAllForm, showSignInForm} from "@/helpers/formShow";
import {fetchCountries} from "@/services/fetchCountries";
import {setLoading, unsetLoading} from "@/helpers/formActions";
import FormUI from "@/config/formUI";
import {fetchCities} from "@/services/fetchCities";
import {notifyError} from "@/helpers/notofication";
import {makeAutocomplete} from "@/helpers/autocomplete";
import appPage from "@/config/appPage";
import onSubmitRegistration from "@/Handlers/onSubmitRegistration";
import formUI from "@/config/formUI";
import {removeValidateClass} from "@/helpers/helpers";

let countries;
let cities = [];
let preloader;

/**
 * @param {Event} event
 */
export default async function onClickShowRegForm(event) {
    hideAllForm();

    try {
        setLoading(appPage.loaderDiv);
        event.preventDefault();

        // get countries with await
        if (countries === undefined) {
            countries = await fetchCountries();
            const country = FormUI.formReg.elements["country"];
            makeAutocomplete(country, Object.values(countries));
            FormUI.formReg.elements["country"].addEventListener("change", await onChangeCountry);
            FormUI.formReg.addEventListener("submit", onSubmitRegistration)
            Array.from(FormUI.formReg.elements)
                .forEach(input => input.addEventListener("focus", (event) => removeValidateClass(event.target)));
        }
    } catch (e) {
        notifyError(e.message);
    } finally {
        unsetLoading(appPage.loaderDiv);
        showSignInForm();
    }
}

async function onChangeCountry(event) {
    try {
        setLoading(appPage.loaderDiv);
        const countryName = event.target.value;
        const city = FormUI.formReg.elements["city"];
        if (!Object.values(countries).includes(countryName)) {
            event.target.value = "";
            city.value = "";
            city.setAttribute("disabled", "disabled");
            throw new Error(`Country "${countryName}" not found!`);
        }
        const hasCities = cities[countryName] || false;
        if (!hasCities) {
            const foundCountry = Object.entries(countries).find(([id, country]) => country === countryName);
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
