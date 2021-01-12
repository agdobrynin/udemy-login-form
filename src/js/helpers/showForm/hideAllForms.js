import appPage from "@/config/appPage";

export default function hideAllForms() {
    [appPage.loginFormDiv, appPage.regFormDiv, appPage.newFeedDiv].forEach((d) => d.classList.add(appPage.hideClass));
}
