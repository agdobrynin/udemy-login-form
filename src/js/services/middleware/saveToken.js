import { storeToken } from "@/services/appToken";
import api from "@/config/api";

export default function saveToken(response) {
    if (response.config.url === api.auth) {
        const token = response?.data?.token || undefined;
        if (token === undefined) {
            throw new Error("Not found key \"token\" in response");
        }
        storeToken(token);
    }

    return response;
}
