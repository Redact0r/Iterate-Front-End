import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import DailyWritingGoal from "./DailyWritingGoal";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds DailyWritingGoal to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <DailyWritingGoal />
      </UserContext.Provider>
    ).find(".div-dailywritinggoal");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
