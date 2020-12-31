import { getToken } from "@/services/appToken";
import { URL_AUTH } from "@/services/auth";
import {URL_REGISTRATION} from "@/services/registration";
import {URL_CITIES} from "@/services/fetchCities";
import {URL_COUNTRIES} from "@/services/fetchCountries";

export const APP_HEADER_TOKEN = "x-access-token";

export default function (request) {

    // Set token for all request exclude auth endpoint
    if (!endpointWithoutToken(request.url)) {
        request.headers[APP_HEADER_TOKEN] = getToken();
    }

    return request;
}


function endpointWithoutToken(url) {
    const found = [URL_AUTH, URL_REGISTRATION, URL_COUNTRIES, URL_CITIES].filter(u => u.indexOf(url) > 0);
    return  found.length > 0;
}