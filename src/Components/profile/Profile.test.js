import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Profile from "./Profile";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Profile to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Profile />
      </UserContext.Provider>
    ).find(".div-profile");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
