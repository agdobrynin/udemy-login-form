import {fetchNews} from "@/services/fetchNews";
import {notifySuccess} from "@/helpers/notofication";
import configDiv from "@/config/appPage";

export default async function NewsFeed() {
    const news = await fetchNews();
    notifySuccess(`Has ${news?.counts || 0} news.`);
    configDiv.newFeedDiv.append("News feed not realize yet.");
}
