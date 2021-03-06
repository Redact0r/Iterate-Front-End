import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Nav from "./Nav";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Nav to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Nav />
      </UserContext.Provider>
    ).find(".nav");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
