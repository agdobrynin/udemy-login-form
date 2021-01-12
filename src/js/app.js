import "bootstrap/dist/css/bootstrap.css";
import "@styles/index";
import { getToken, resetToken } from "@/services/appToken";
import { notifyError, notifyWarning } from "@/helpers/notofication";
import onClickShowLoginForm from "@/Handlers/onClickShowLoginForm";
import onClickShowRegForm from "@/Handlers/onClickShowRegForm";
import onLogout from "@/Handlers/onLogout";
import appPage from "@/config/appPage";
import loginForm from "@/helpers/showForm/loginForm";
import newsForm from "@/helpers/showForm/newsForm";
import hideAllForms from "@/helpers/showForm/hideAllForms";

/**
 * Show registration form.
 */
appPage.showSignInLink.addEventListener("click", onClickShowRegForm);

/**
 * Show loginForm form.
 */
appPage.showLoginLink.addEventListener("click", onClickShowLoginForm);

/**
 * Logout. Delete auth token.
 */
appPage.logoutDiv.addEventListener("click", onLogout);

hideAllForms();

let authToken = null;
try {
    authToken = getToken();
} catch (e) {
    notifyWarning(e.message);
}

if (authToken === null) {
    loginForm();
} else {
    try {
        newsForm();
    } catch (e) {
        notifyError(e.message);
        resetToken();
        loginForm();
    }
}
