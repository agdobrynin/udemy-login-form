import {showRegForm} from "@/helpers/formShow";

/**
 * @param {Event} event
 */
export default async function onClickShowRegForm(event) {
    event.preventDefault();
    showRegForm();
}
