import formUI from "@/config/formUI";
import appPage from "@/config/appPage";
import {notifyClearAll, notifyError, notifySuccess} from "@/helpers/notofication";
import {lockForm, setLoading, unlockForm, unsetLoading} from "@/helpers/formActions";
import showNewsFeed from "@/Controllers/NewsFeed";
import validateFields from "@/validation/validateFields";
import {loginAction} from "@/services/auth";

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
        const authResult = await loginAction(login.value, password.value);
        [login, password].forEach(input => input.classList.remove(formUI.validClass));
        formUI.formLogin.reset();
        notifyClearAll();
        notifySuccess('Auth successfully');
        await showNewsFeed();
    } catch (error) {
        notifyError(error.message);
    } finally {
        unlockForm(formUI.formLogin);
        unsetLoading(appPage.loaderDiv);
    }
}
