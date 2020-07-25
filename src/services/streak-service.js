import config from "config";

const streakService = {
  checkStreak(userid) {
    return fetch(`${config.API_ENDPOINT}/streak/check`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userid),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getStreak(userid) {
    return fetch(`${config.API_ENDPOINT}/streak?userid=${userid}`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postStreak(userid) {
    return fetch(`${config.API_ENDPOINT}/streak`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userid),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default streakService;
