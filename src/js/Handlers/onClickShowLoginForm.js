import loginForm from "@/helpers/showForm/loginForm";

/**
 * @param {Event} event
 */
export default function onClickShowLoginForm(event) {
    event.preventDefault();
    loginForm();
}
