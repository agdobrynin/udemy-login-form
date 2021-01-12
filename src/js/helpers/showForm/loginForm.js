import { setLoading, unsetLoading } from "@/helpers/formActions";
import appPage from "@/config/appPage";

export default function loginForm() {
    setLoading(appPage.loaderDiv);
    import("@/Controllers/Auth").finally(() => {
        unsetLoading(appPage.loaderDiv);
        appPage.loginFormDiv.classList.remove(appPage.hideClass);
        [appPage.regFormDiv, appPage.newFeedDiv].forEach((d) => d.classList.add(appPage.hideClass));
    });
}
