import axios from "axios";
import api from "@/config/api";
import saveToken from "@/services/middleware/saveToken";
import clearDataFromApi from "@/services/middleware/clearDataFromApi";
import errorApi from "@/services/middleware/errorApi";
import setTokenForRequest from "@/services/middleware/setTokenForRequest";

const http = axios.create({
    baseURL: api.endpoint,
    headers: {
        "Content-Type": "application/json",
    },
});

// Save token after success auth
http.interceptors.response.use(saveToken);
// Set token for all request to API
http.interceptors.request.use(setTokenForRequest);

// Get clear response from API or use errorApi middleware
http.interceptors.response.use(clearDataFromApi, errorApi);

export default http;
