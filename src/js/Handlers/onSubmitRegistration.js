import formUI from "@/config/formUI";
import validateFields from "@/validation/validateFields";
import {registration} from "@/services/registration";
import {notifyError, notifySuccess} from "@/helpers/notofication";
import {showLoginForm} from "@/helpers/formShow";
import {removeValidationClassOnInputs} from "@/helpers/helpers";

/**
 * @param {Event} event
 */
export default async function onSubmitRegistration(event) {
    event.preventDefault();

    if (formUI.formReg.elements["password"].value !== formUI.formReg.elements["password2"].value) {
        formUI.formReg.elements["password2"].value = "";
    }

    const isValid = validateFields(Array.from(formUI.formReg.elements));

    if(!isValid) {
        notifyError("Data in form is invalid");
        return;
    }

    const d = new Date(formUI.formReg.elements["birthday"].value);

    const regUser = {
        email: formUI.formReg.elements["email"].value,
        password: formUI.formReg.elements["password"].value,
        nickname: formUI.formReg.elements["nickname"].value,
        first_name: formUI.formReg.elements["first_name"].value,
        last_name: formUI.formReg.elements["last_name"].value,
        phone: formUI.formReg.elements["phone"].value,
        gender_orientation: formUI.formReg.elements["gender_orientation"].value,
        country: formUI.formReg.elements["country"].value,
        city: formUI.formReg.elements["city"].value,
        date_of_birth_day: ("0" + (d.getDay() + 1)).slice(-2),
        date_of_birth_month: ("0" + (d.getMonth() + 1)).slice(-2),
        date_of_birth_year: String(d.getFullYear()),
    };
    try {
        const response = await registration(regUser);
        if (response.error) {
            throw new Error(response.message);
        }
        formUI.formReg.reset();
        removeValidationClassOnInputs(Array.from(formUI.formReg.elements));
        notifySuccess(response?.message, 0);
        showLoginForm();
    } catch (e) {
        notifyError(e.message);
    }
}