import createRequest from "./request";

const request = createRequest();

export const getImages= (param = 1) =>
    request.get(`v1/images/search?limit=${param}`);