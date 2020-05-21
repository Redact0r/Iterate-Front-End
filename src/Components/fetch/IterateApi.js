import React, { Component } from "react";

const baseUrl = "http://localhost:8080/myworks";
const IterateApi = {
  get() {
    return fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
  post(newWorks) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorks),
    }).then((res) => alert(res.json()));
  },
  delete(id) {
    console.log(`Deleted ${id}`);
  },
};
export default IterateApi;
