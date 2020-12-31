const notifyContainerClass = "notify-container";
const notifyClass = "notify";

/**
 * Create base container for all notification.
 *
 * @returns {HTMLDivElement}
 */
function createContainer() {
    const createdContainer = document.createElement("div");
    createdContainer.classList.add(notifyContainerClass);
    createdContainer.style.cssText = "position: fixed; top: 10px; right: 10px; z-index: 99;";
    document.addEventListener("click", (event) => {
        if(event.target?.classList.contains("btn-close")) {
            event.target?.parentNode.remove();
        }
    });
    document.body.appendChild(createdContainer);

    return createdContainer;
}

/**
 * Return main container for all notification.
 *
 * @returns {HTMLDivElement}
 */
function getContainer() {
    return document.querySelector(`.${notifyContainerClass}`) || createContainer();
}

/**
 * Create notification element.
 *
 * @param {String} message Info message
 * @param {String} className Css classes for div
 * @returns {HTMLDivElement}
 */
function createNotify(message, className) {
    const notifyDiv = document.createElement("div");
    notifyDiv.className = `${notifyClass} alert-dismissible ${className}`;
    notifyDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    return notifyDiv;
}

/**
 * Show notification.
 *
 * @param {String} message Info message.
 * @param {String} className Css classes for div
 * @param {Number} timeout Close notify by time out. If undefined notify is permanent display.
 */
export function notify(message, className, timeout) {
    const notifyContainer = getContainer();
    if (className === undefined) {
        className = "alert alert-primary";
    }
    const notifyDiv = createNotify(message, className);
    notifyContainer.insertAdjacentElement("beforeend", notifyDiv);
    if (timeout) {
        setTimeout(() =>  notifyDiv.remove(), timeout);
    }
}

export function notifyClearAll() {
    Array.from(getContainer().querySelectorAll(`.${notifyClass}`)).forEach(notify => notify?.remove());
}

export function notifyError(message, timeout = 5000) {
    notify(message, "alert alert-danger", timeout);
}

export function notifySuccess(message, timeout = 2000) {
    notify(message, "alert alert-success", timeout);
}

export function notifyInfo(message, timeout = 5000) {
    notify(message, "alert alert-primary", timeout);
}

export function notifyWarning(message, timeout = 3000) {
    notify(message, "alert alert-warning", timeout);
}