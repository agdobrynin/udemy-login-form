import "bootstrap/dist/css/bootstrap.css";
import "@styles/index";
import {setLoading, unsetLoading} from "@/helpers/formActions";
import {getToken, resetToken} from "@/services/appToken";
import {notifyError, notifyWarning} from "@/helpers/notofication";
import {hideAllForm, showLoginForm} from "@/helpers/formShow";
import divConfig from "@/config/appPage";
import showNewsFeed from "@/Controllers/NewsFeed";
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
        setLoading(appPage.loaderDiv);
        import("@/Controllers/NewsFeed")
            .then( () => showNewsFeed().catch(e => notifyError(e.message)))
            .finally(() => unsetLoading(appPage.loaderDiv));
    } catch (e) {
        notifyError(e.message);
        resetToken();
        showLoginForm();
    }
}

