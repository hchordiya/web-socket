import { TGet, TPatch, TPost } from "../interfaces/api.interface";

const get = (urls: TGet) => {
  return fetch(urls.join(""));
};
const post = (postData: TPost) => {
  const { urls, data, headers } = postData;
  return fetch(urls.join(""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
};
const patch = (patchData: TPatch) => {
  const { urls, data, headers } = patchData;
  return fetch(urls.join(""), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
};
export const api = {
  get,
  post,
  patch
};
