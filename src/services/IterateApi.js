import config from "../config";

const IterateApi = {
  get(userid) {
    return fetch(`${config.API_ENDPOINT}/myworks?userid=${userid}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
  post(newWorks) {
    return fetch(`${config.API_ENDPOINT}/myworks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorks),
    }).then((res) => (res.error ? res.error : res.json()));
  },
  delete(id) {
    return fetch(`${config.API_ENDPOINT}/myworks/id/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
  patch(id, updatedObj) {
    return fetch(`${config.API_ENDPOINT}/myworks/id/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedObj),
    }).then(() => {
      alert("Current work saved!");
    });
  },
};
export default IterateApi;
