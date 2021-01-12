import { setLoading, unsetLoading } from "@/helpers/formActions";
import appPage from "@/config/appPage";
import NewsFeed from "@/Controllers/NewsFeed";
import { notifyError } from "@/helpers/notofication";

export default function newsForm() {
    setLoading(appPage.loaderDiv);
    import("@/Controllers/NewsFeed")
        .then(() => NewsFeed()
            .catch((e) => notifyError(e.message))
            .finally(() => {
                unsetLoading(appPage.loaderDiv);
                appPage.newFeedDiv.classList.remove(appPage.hideClass);
                [appPage.loginFormDiv, appPage.regFormDiv].forEach((d) => d.classList.add(appPage.hideClass));
            }));
}
