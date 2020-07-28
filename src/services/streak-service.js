import config from "../config";

const streakService = {
  checkStreak(userid) {
    if (!userid) {
      userid = localStorage.getItem("userid");
    }
    const postStreakObj = { userid: userid };
    return fetch(`${config.API_ENDPOINT}/streak/check`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postStreakObj),
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
    if (!userid) {
      userid = localStorage.getItem("userid");
    }
    const postStreakObj = { userid: userid };

    return fetch(`${config.API_ENDPOINT}/streak`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postStreakObj),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default streakService;
