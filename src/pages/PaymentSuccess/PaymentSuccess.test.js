import React from "react";
import { shallow } from "enzyme";
import PaymentSuccess from "./PaymentSuccess";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

describe("PaymentSuccess", () => {
  it("renders Header component", () => {
    const wrapper = shallow(<PaymentSuccess />);
    const headerComponent = wrapper.find(Header);
    expect(headerComponent).toHaveLength(1);
  });

  it("renders check circle icon", () => {
    const wrapper = shallow(<PaymentSuccess />);
    const checkCircleIcon = wrapper.find("AiFillCheckCircle");
    expect(checkCircleIcon).toHaveLength(1);
  });

  it("renders 'ORDER PLACED!' text", () => {
    const wrapper = shallow(<PaymentSuccess />);
    const orderPlacedText = wrapper.find("div").at(1).text();
    expect(orderPlacedText).toEqual("ORDER PLACED!");
  });

  it("renders success message", () => {
    const wrapper = shallow(<PaymentSuccess />);
    const successMessage = wrapper.find("div").at(2).text();
    expect(successMessage).toEqual(
      "Your order was placed successfully. For more details, check Order status."
    );
  });

  it("renders Footer component", () => {
    const wrapper = shallow(<PaymentSuccess />);
    const footerComponent = wrapper.find(Footer);
    expect(footerComponent).toHaveLength(1);
  });
});
