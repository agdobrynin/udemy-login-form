import regForm from "@/helpers/showForm/regForm";

/**
 * @param {Event} event
 */
export default async function onClickShowRegForm(event) {
    event.preventDefault();
    regForm();
}
