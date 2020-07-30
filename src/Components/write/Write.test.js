import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Write from "./Write";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Write to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Write />
      </UserContext.Provider>
    ).find(".div-write");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
