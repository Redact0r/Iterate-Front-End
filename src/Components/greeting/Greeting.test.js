import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Greeting from "./Greeting";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Greeting to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Greeting />
      </UserContext.Provider>
    ).find(".div-greet");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
