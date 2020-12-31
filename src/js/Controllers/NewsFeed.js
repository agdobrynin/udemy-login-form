import {fetchNews} from "@/services/fetchNews";
import {showNewsFeedForm} from "@/helpers/formShow";
import {notifyError, notifySuccess} from "@/helpers/notofication";
import configDiv from "@/config/appPage";

export default async function showNewsFeed() {
    try {
        const news = await fetchNews();
        notifySuccess(`Has ${news?.counts || 0} news.`);
        // TODO make news block by data transfer from service fetchNews.
        configDiv.newFeedDiv.append("News feed not realize yet.");
    } catch (e) {
        notifyError(e.message);
    } finally {
        showNewsFeedForm();
    }

}