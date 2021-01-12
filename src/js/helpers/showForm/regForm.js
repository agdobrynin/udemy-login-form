import {
    lockForm, setLoading, unlockForm, unsetLoading,
} from "@/helpers/formActions";
import appPage from "@/config/appPage";
import formUI from "@/config/formUI";
import initRegForm from "@/Controllers/Registration";

export default function regForm() {
    setLoading(appPage.loaderDiv);
    lockForm(formUI.formReg);
    import("@/Controllers/Registration")
        .then(() => {
            initRegForm()
                .then(() => {
                    unlockForm(formUI.formReg);
                })
                .finally(() => {
                    unsetLoading(appPage.loaderDiv);
                    appPage.regFormDiv.classList.remove(appPage.hideClass);
                    [appPage.loginFormDiv, appPage.newFeedDiv].forEach((d) => d.classList.add(appPage.hideClass));
                });
        });
}
