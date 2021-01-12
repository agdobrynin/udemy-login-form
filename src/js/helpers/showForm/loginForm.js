import { setLoading, unsetLoading } from "@/helpers/formActions";
import appPage from "@/config/appPage";
import hideAllForms from "@/helpers/showForm/hideAllForms";

export default function loginForm() {
    setLoading(appPage.loaderDiv);
    import("@/Controllers/Auth").finally(() => {
        unsetLoading(appPage.loaderDiv);
        hideAllForms();
        appPage.loginFormDiv.classList.remove(appPage.hideClass);
    });
}
