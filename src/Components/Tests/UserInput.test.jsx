import React from "react";
import { describe, expect, it } from "vitest";
import UserInput from "../UserInput";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Landing Page", () => {
  it("Check if the input form is rendered", async () => {
    render(
      <Provider store={store}>
        <UserInput />
      </Provider>
    );
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("Check if get my location button is rendered", () => {
    render(
      <Provider store={store}>
        <UserInput />
      </Provider>
    );
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toHaveClass("location-btn");
  });
});
