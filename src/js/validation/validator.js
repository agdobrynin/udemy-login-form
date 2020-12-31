const rules = {
    email: {
        regExp: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    },
    password: {
        regExp: /(?=.*?[0-9].*?[0-9])(?=.*[a-z]).{8,}/i,
        invalidMessage: "Minimum length password 8 characters. Password mast contain 2 digest",
    },
    notEmpty: {
        regExp: /^(?!\s*$).+/,
    },
    phone: {
      regExp: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    }
    ,
    date: {
        regExp: /^(\d){4}-(\d){2}-(\d){2}$/,
    },
}

export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

/**
 * @param {HTMLInputElement} input
 * @param {String} ruleName
 * @throws Error
 */
export function validator(input, ruleName) {
    const rule = rules[ruleName];
    if (!rule) {
        return;
    }

    if (!rule.regExp.test(input.value)) {
        throw new ValidationError(rule?.invalidMessage || "");
    }

    if (ruleName === "date" && !(new Date(input.value) instanceof Date)) {
        throw new ValidationError(`Invalid date format from string "${input.value}"`);
    }
}