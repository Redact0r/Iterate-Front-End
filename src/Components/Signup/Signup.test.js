import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Signup from "./Signup";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Signup to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Signup />
      </UserContext.Provider>
    ).find(".signup-form");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
