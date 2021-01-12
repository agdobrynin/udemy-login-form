import formUI from "@/config/formUI";
import appPage from "@/config/appPage";
import { notifyClearAll, notifyError, notifySuccess } from "@/helpers/notofication";
import {
    lockForm, setLoading, unlockForm, unsetLoading,
} from "@/helpers/formActions";
import validateFields from "@/validation/validateFields";
import loginAction from "@/services/auth";
import { removeValidationClassOnInputs } from "@/helpers/helpers";
import newsForm from "@/helpers/showForm/newsForm";

/**
 * @param {Event} event
 * @param {HTMLInputElement} login
 * @param {HTMLInputElement} password
 */
export default async function onSubmitLogin(event, login, password) {
    event.preventDefault();
    const isValid = validateFields([login, password]);

    if (!isValid) {
        return;
    }

    try {
        lockForm(formUI.formLogin);
        setLoading(appPage.loaderDiv);
        await loginAction(login.value, password.value);
        removeValidationClassOnInputs([login, password]);
        formUI.formLogin.reset();
        notifyClearAll();
        notifySuccess("Auth successfully");
        newsForm();
    } catch (error) {
        notifyError(error.message);
    } finally {
        unlockForm(formUI.formLogin);
        unsetLoading(appPage.loaderDiv);
    }
}
