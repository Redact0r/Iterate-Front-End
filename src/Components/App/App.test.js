import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Write from "../Write/Write";
import Profile from "../Profile/Profile";
import Greeting from "../Greeting/Greeting";
import App from "./App";

configure({ adapter: new Adapter() });

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should render the correct routes", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(0);
  });
  it("should render the correct routes", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Signup)).toHaveLength(0);
  });
  it("should render the correct routes", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/write"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Write)).toHaveLength(0);
  });
  it("should render the correct routes", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/profile"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Profile)).toHaveLength(0);
  });
  it("should render the correct routes", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Greeting)).toHaveLength(1);
  });
});
