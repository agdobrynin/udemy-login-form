import { setLoading, unsetLoading } from "@/helpers/formActions";
import appPage from "@/config/appPage";
import NewsFeed from "@/Controllers/NewsFeed";
import { notifyError } from "@/helpers/notofication";
import hideAllForms from "@/helpers/showForm/hideAllForms";

export default function newsForm() {
    import("@/Controllers/NewsFeed")
        .then(async () => {
            setLoading(appPage.loaderDiv);
            await NewsFeed();
            unsetLoading(appPage.loaderDiv);
            hideAllForms();
            appPage.newFeedDiv.classList.remove(appPage.hideClass);
        }).catch((e) => notifyError(e.message));
}
