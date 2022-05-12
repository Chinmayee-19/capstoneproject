import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/job/seealljobs');
}

const get = id => {
    return httpClient.get(`/job/${id}`);
}
const create = data => {
    return httpClient.post("/job/postjob", data);
}

const update = data => {
    return httpClient.put('/job/updatejob/${id}', data);
}

const remove = id => {
    return httpClient.delete(`/job/deletejob/${id}`);
}
export default { getAll, get, create, update, remove };