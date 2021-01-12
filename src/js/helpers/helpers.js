import formUI from "@/config/formUI";

/**
 * @param {(HTMLInputElement|HTMLSelectElement)} input
 */
export function removeValidateClass(input) {
    input.classList.remove(formUI.invalidClass, formUI.validClass);
}

/**
 * @param {(HTMLInputElement|HTMLSelectElement)[]} inputs
 */
export function removeValidationClassOnInputs(inputs) {
    inputs.forEach((input) => removeValidateClass(input));
}
