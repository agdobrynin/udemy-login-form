import appPage from "@/config/appPage";

/**
 * Get Fieldset element as wrapper of HTMLElement.
 *
 * @param {HTMLElement} from
 * @returns {HTMLFieldSetElement}
 */
function wrapFieldSet(from) {
    let fieldset = from.parentNode;
    if (fieldset.tagName.toLocaleUpperCase() !== "FIELDSET") {
        fieldset = document.createElement("fieldset");
        from.parentNode.insertBefore(fieldset, from);
        fieldset.appendChild(from);

        return fieldset;
    }

    return fieldset;
}

/**
 * Get loader element.
 *
 * @param {Element} htmlElement
 * @returns {HTMLDivElement|any}
 */
function getLoader(htmlElement) {
    const loader = htmlElement.querySelector(".linear-activity");
    if (loader === null) {
        const createdLoader = document.createElement("div");
        createdLoader.classList.add("linear-activity");
        createdLoader.innerHTML = "<div class='indeterminate'></div>";
        htmlElement.appendChild(createdLoader);

        return createdLoader;
    }

    return loader;
}

/**
 * Block form.
 *
 * @param {HTMLElement} from
 */
export function lockForm(from) {
    wrapFieldSet(from).setAttribute("disabled", "disabled");
}

/**
 * Unblock form.
 *
 * @param {HTMLElement} from
 */
export function unlockForm(from) {
    wrapFieldSet(from).removeAttribute("disabled");
}

/**
 * Show loading element for HTMLElement.
 * @param {Element} element
 */
export function setLoading(element) {
    getLoader(element).classList.remove(appPage.hideClass);
}

/**
 * Hide loading element for HTMLElement.
 *
 * @param {Element} element
 */
export function unsetLoading(element) {
    getLoader(element).classList.add(appPage.hideClass);
}
