import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2IwYWYwNWNhNTQzMDFkOTMxMTUzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDg2NTYxMCwiZXhwIjoxNjQxMTI0ODEwfQ.zQxn0XuVw1nJ5TG3OldSrh53BnoLJgmeNP0aDnpIsd8";

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});

export const useRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` },
});
