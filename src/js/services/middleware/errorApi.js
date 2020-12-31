export default function errorApi(error) {
    // TODO In the future, implement your own error handlers with useful error text
    const message = error?.response?.data?.message || error?.message || null;
    if (message) {
        return Promise.reject(new Error(message));
    }

    return Promise.reject(error);
}
