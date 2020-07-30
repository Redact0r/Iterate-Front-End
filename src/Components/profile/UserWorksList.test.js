import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserWorksList from "./UserWorksList";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds UserWorksList to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <UserWorksList />
      </UserContext.Provider>
    ).find(".div-myworks");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
