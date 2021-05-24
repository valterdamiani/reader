import axios from 'axios';

const api = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
});
if (localStorage.getItem("token") != null) {
    api.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem("token");
}
// instance.interceptors.request...

export default api;