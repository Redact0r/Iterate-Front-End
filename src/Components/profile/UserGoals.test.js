import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import UserGoals from "./UserGoals";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds UserGoals to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <UserGoals />
      </UserContext.Provider>
    ).find(".div-goals");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
