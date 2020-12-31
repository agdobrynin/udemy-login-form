import {resetToken} from "@/services/appToken";
import {showLoginForm} from "@/helpers/formShow";

export default function onLogout(event) {
    if (event.target.tagName === "BUTTON") {
        resetToken();
        showLoginForm();
    }
}