import { resetToken } from "@/services/appToken";
import loginForm from "@/helpers/showForm/loginForm";

export default function onLogout(event) {
    if (event.target.tagName === "BUTTON") {
        resetToken();
        loginForm();
    }
}
