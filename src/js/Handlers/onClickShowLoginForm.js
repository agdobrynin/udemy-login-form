import {showLoginForm} from "@/helpers/formShow";

/**
 * @param {Event} event
 */
export default function onClickShowLoginForm(event) {
        event.preventDefault();
        showLoginForm();
}