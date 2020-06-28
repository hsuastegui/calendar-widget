import React from "react";
import { shallow } from "enzyme";
import { SecondaryButton } from "../../styles";
import Calendar from "../Calendar";
import App from "./index";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("opens calendar", () => {
    wrapper.find(SecondaryButton).simulate("click");
    expect(wrapper.find(Calendar).prop("open")).toBe(true);
  });
});
