import React from "react";
import { shallow } from "enzyme";
import PaymentDetails from "./PaymentDetails";

describe("PaymentDetails", () => {
  it("renders check circle icon", () => {
    const wrapper = shallow(<PaymentDetails />);
    const checkCircleIcon = wrapper.find("AiFillCheckCircle");
    expect(checkCircleIcon).toHaveLength(1);
  });

  it("renders 'ORDER PLACED!' text", () => {
    const wrapper = shallow(<PaymentDetails />);
    const orderPlacedText = wrapper.find("div").at(1).text();
    expect(orderPlacedText).toEqual("ORDER PLACED!");
  });

  it("renders success message", () => {
    const wrapper = shallow(<PaymentDetails />);
    const successMessage = wrapper.find("div").at(2).text();
    expect(successMessage).toEqual(
      "Your order was placed successfully. For more details, check Order status."
    );
  });
});