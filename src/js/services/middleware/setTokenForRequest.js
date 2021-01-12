import { getToken } from "@/services/appToken";
import api from "@/config/api";

export const APP_HEADER_TOKEN = "x-access-token";

function endpointWithoutToken(url) {
    const found = [api.auth, api.reg, api.countries, api.cities].filter((u) => u.indexOf(url) > 0);
    return found.length > 0;
}

export default function setTokenForRequest(request) {
    // Set token for all request exclude auth endpoint
    if (!endpointWithoutToken(request.url)) {
        request.headers[APP_HEADER_TOKEN] = getToken();
    }

    return request;
}
