import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductList from "./ProductList";

const mockStore = configureStore([]);

describe("ProductList", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      productList: [
        { prod_name: "Product 1", index_group_name: "Menswear", price: 10 },
        { prod_name: "Product 2", index_group_name: "Ladieswear", price: 20 },
      ],
      productStatus: "success",
    });

    component = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  });

  it("renders the search input", () => {
    const searchInput = component.getByPlaceholderText("Search something quick here...");
    expect(searchInput).toBeInTheDocument();
  });

  it("dispatches fetchProducts action on mount", () => {
    expect(store.getActions()).toContainEqual({ type: "FETCH_PRODUCTS" });
  });

  it("filters products by name when searchName state changes", () => {
    const searchInput = component.getByPlaceholderText("Search something quick here...");
    fireEvent.change(searchInput, { target: { value: "Product 1" } });

    const productList = component.container.querySelectorAll(".product-card");
    expect(productList.length).toBe(1);
    expect(productList[0]).toHaveTextContent("Product 1");
  });

  it("filters products by category when category state changes", () => {
    const menswearCategory = component.getByText("Menswear");
    fireEvent.click(menswearCategory);

    const productList = component.container.querySelectorAll(".product-card");
    expect(productList.length).toBe(1);
    expect(productList[0]).toHaveTextContent("Product 1");
  });

  it("filters products by price when lowPrice and highPrice state changes", () => {
    const fromPriceInput = component.getByPlaceholderText("From $");
    const toPriceInput = component.getByPlaceholderText("To $");

    fireEvent.change(fromPriceInput, { target: { value: "5" } });
    fireEvent.change(toPriceInput, { target: { value: "15" } });

    const productList = component.container.querySelectorAll(".product-card");
    expect(productList.length).toBe(1);
    expect(productList[0]).toHaveTextContent("Product 1");
  });
});
