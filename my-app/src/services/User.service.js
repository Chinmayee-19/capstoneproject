
import httpClient from "../http-common";

const get = id => {
    return httpClient.get(`/user/${id}`);
}
const create = data => {
    return httpClient.post("/user/saveuser", data);
}
const getAll = () => {
    return httpClient.get('/user/seeallusers');
}

export default {get,create,getAll};