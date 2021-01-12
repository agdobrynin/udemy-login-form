import { validator, ValidationError } from "@/validation/validator";
import formUI from "@/config/formUI";
import { notifyError, notifyWarning } from "@/helpers/notofication";

/**
 *
 * @param {HTMLInputElement[]} inputs
 */
export default function validateFields(inputs) {
    return inputs.every((input) => {
        let res = true;

        try {
            validator(input, input.dataset.validateRule);
            input.classList.add(formUI.validClass);
            input.classList.remove(formUI.invalidClass);
        } catch (error) {
            input.classList.add(formUI.invalidClass);
            if (error instanceof ValidationError) {
                if (error.message) {
                    notifyWarning(error.message);
                }
                res = false;
            }
            notifyError(error.message);
        }

        return res;
    });
}
