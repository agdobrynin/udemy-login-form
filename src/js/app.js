import "bootstrap/dist/css/bootstrap.css";
import "@styles/index";
import {getToken, resetToken} from "@/services/appToken";
import {notifyError, notifyWarning} from "@/helpers/notofication";
import {hideAllForm, showLoginForm, showNewsFeedForm} from "@/helpers/formShow";
import divConfig from "@/config/appPage";
import onClickShowLoginForm from "@/Handlers/onClickShowLoginForm";
import onClickShowRegForm from "@/Handlers/onClickShowRegForm";
import onLogout from "@/Handlers/onLogout";
import appPage from "@/config/appPage";

/**
 * Show registration form.
 */
appPage.showSignInLink.addEventListener("click", onClickShowRegForm);

/**
 * Show login form.
 */
appPage.showLoginLink.addEventListener("click", onClickShowLoginForm);

/**
 * Logout. Delete auth token.
 */
divConfig.logoutDiv.addEventListener("click", onLogout);

hideAllForm();

let authToken = null;
try {
    authToken = getToken();
} catch (e) {
    notifyWarning(e.message);
}

if (authToken === null) {
    showLoginForm();
} else {
    try {
        showNewsFeedForm();
    } catch (e) {
        notifyError(e.message);
        resetToken();
        showLoginForm();
    }
}

