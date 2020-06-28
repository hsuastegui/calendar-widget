import React from "react";
import { shallow } from "enzyme";
import Calendar from "./index";
import { Header, Button, Bubble } from "./style";
jest.mock("../../utils");

describe("Calendar", () => {
  const onSelect = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calendar open onSelect={onSelect} />);
  });
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("displays previous month", () => {
    wrapper.find(Button).first().simulate("click");
    expect(wrapper.find(Header).text()).toEqual("May 2020");
  });
  it("displays next month", () => {
    wrapper.find(Button).last().simulate("click");
    expect(wrapper.find(Header).text()).toEqual("July 2020");
  });
  it("selects date", () => {
    wrapper.find(Bubble).at(12).simulate("click");
    expect(onSelect).toHaveBeenCalledWith("13/06/2020");
  });
});
