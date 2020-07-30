import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserWorks from "./UserWorks";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds UserWorks to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <UserWorks />
      </UserContext.Provider>
    ).find(".btn");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
