import { validator, ValidationError } from "@/validation/validator";
import formUI from "@/config/formUI";
import { notifyError, notifyWarning } from "@/helpers/notofication";

/**
 *
 * @param {HTMLInputElement[]} inputs
 */
export default function validateFields(inputs) {
    return inputs.every((input) => {
        try {
            validator(input, input.dataset.validateRule);
            input.classList.add(formUI.validClass);
            input.classList.remove(formUI.invalidClass);
            return true;
        } catch (error) {
            const { message } = error;
            input.classList.add(formUI.invalidClass);

            if (!message) {
                return false;
            }

            if (error instanceof ValidationError) {
                notifyWarning(message);
            } else {
                notifyError(message);
            }

            return false;
        }
    });
}
