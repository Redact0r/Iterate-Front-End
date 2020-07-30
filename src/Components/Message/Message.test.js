import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Message from "./Message";
import UserContext from "../../Context/UserContext";

configure({ adapter: new Adapter() });

describe(`Adds Message to dom without crashing`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Message />
      </UserContext.Provider>
    ).find(".message-container");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
