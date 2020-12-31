import { URL_AUTH } from "@/services/auth";
import { storeToken } from "@/services/appToken";

export default function saveToken(response) {

    if (response.config.url === URL_AUTH) {
        const token = response?.data?.token || undefined;
        if (token === undefined) {
            throw new Error('Not found key "token" in response');
        }
        storeToken(token);
    }

    return response;
}