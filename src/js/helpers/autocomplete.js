/**
 * Autocomplete input
 * @param {HTMLInputElement} inputTextField
 * @param {String[]} arrayOptions
 */
export function makeAutocomplete(inputTextField, arrayOptions) {
    const filedName = inputTextField?.name || "unknown";
    const errorPrefixMessage = `makeAutocomplete for field "${filedName}"`;

    if (!(inputTextField instanceof HTMLInputElement) || inputTextField.type.toLocaleUpperCase() !== 'TEXT') {
        throw new Error(`${errorPrefixMessage} - First params must be as HTMLInputElement with type = TEXT`);
    }
    if (!(arrayOptions instanceof Array)) {
        throw new Error(`${errorPrefixMessage} - Second params must be as Array with string elements`);
    }
    const id = filedName + "-autocomplete";
    let datalist = document.querySelector(`#${id}`);
    if (datalist === null) {
        inputTextField.setAttribute("list", id);
        inputTextField.insertAdjacentHTML("afterend", `<datalist id="${id}"></datalist>`);
        datalist = document.querySelector(`#${id}`);
    }

    let options = arrayOptions.reduce((acc, item) => {
        acc += `<option value="${item}">`;
        return acc;
    }, "");

    datalist.innerHTML = options;
    inputTextField.value = "";
}