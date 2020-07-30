import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Login from "./Login";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Login to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Login />
      </UserContext.Provider>
    ).find(".login-form");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
