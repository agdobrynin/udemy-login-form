import formUI from "@/config/formUI";
import onSubmitLogin from "@/Handlers/onSubmitLogin";
import {removeValidateClass} from "@/helpers/helpers";

const {formLogin, emailLogin, passwordLogin} = formUI;
/** @type {HTMLInputElement[]} */
const loginFormInputs = [emailLogin, passwordLogin];

formLogin.addEventListener("submit", (event) => onSubmitLogin(event, emailLogin, passwordLogin));
loginFormInputs.forEach(input => {
    input.addEventListener("focus", (event) => removeValidateClass(event.target));
});
