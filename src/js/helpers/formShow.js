import divConfig from "@/config/appPage";
import {lockForm, setLoading, unlockForm, unsetLoading} from "@/helpers/formActions";
import appPage from "@/config/appPage";
import NewsFeed from "@/Controllers/NewsFeed";
import {notifyError} from "@/helpers/notofication";
import initRegForm from "@/Controllers/Registration";
import formUI from "@/config/formUI";

const hideClass = "d-none";

export function showLoginForm() {
    divConfig.loginFormDiv.classList.remove(hideClass);
    [divConfig.regFormDiv, divConfig.newFeedDiv, divConfig.logoutDiv].forEach(d => d.classList.add(hideClass));
    setLoading(appPage.loaderDiv);
    import("@/Controllers/Auth").finally(() => unsetLoading(appPage.loaderDiv));
}

export function showRegForm() {
    divConfig.regFormDiv.classList.remove(hideClass);
    [divConfig.loginFormDiv, divConfig.newFeedDiv, divConfig.logoutDiv].forEach(d => d.classList.add(hideClass));
    setLoading(appPage.loaderDiv);
    lockForm(formUI.formReg);
    import("@/Controllers/Registration")
        .then(() => {
            initRegForm()
                .then(() => {
                    unlockForm(formUI.formReg)
                })
                .finally(() => {
                    unsetLoading(appPage.loaderDiv);
                });
        });
}

export function showNewsFeedForm() {
    [divConfig.newFeedDiv, divConfig.logoutDiv].forEach(d => d.classList.remove(hideClass));
    [divConfig.loginFormDiv, divConfig.regFormDiv].forEach(d => d.classList.add(hideClass));
    setLoading(appPage.loaderDiv);
    import("@/Controllers/NewsFeed")
        .then(() => NewsFeed().catch(e => notifyError(e.message)))
        .finally(() => unsetLoading(appPage.loaderDiv));

}

export function hideAllForm() {
    [divConfig.loginFormDiv, divConfig.regFormDiv, divConfig.newFeedDiv].forEach(d => d.classList.add(hideClass));
}