import fetchNews from "@/services/fetchNews";
import { notifySuccess } from "@/helpers/notofication";
import configDiv from "@/config/appPage";

export default async function NewsFeed() {
    const news = await fetchNews();
    const newsCount = (news?.counts) || 0;
    notifySuccess(`Has ${newsCount} news.`);
    configDiv.newFeedDiv.append("News feed not realize yet.");
}
