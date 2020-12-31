import divConfig from "@/config/appPage";
import {setLoading, unsetLoading} from "@/helpers/formActions";
import appPage from "@/config/appPage";

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
}

export function showNewsFeedForm() {
    [divConfig.newFeedDiv, divConfig.logoutDiv].forEach(d =>d.classList.remove(hideClass));
    [divConfig.loginFormDiv, divConfig.regFormDiv].forEach(d => d.classList.add(hideClass));
}

export function hideAllForm() {
    [divConfig.loginFormDiv, divConfig.regFormDiv, divConfig.newFeedDiv].forEach(d => d.classList.add(hideClass));
}