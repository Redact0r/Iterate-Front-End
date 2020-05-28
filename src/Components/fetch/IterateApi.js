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
    }).then((res) => {
      if (!res.json()) {
        alert("Something went wrong");
      }
      alert("Saved!");
    });
  },
  delete(id) {
    return fetch(`${baseUrl}/id/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
  patch(id, updateObj) {
    return fetch(`${baseUrl}/id/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateObj),
    });
  },
};
export default IterateApi;
