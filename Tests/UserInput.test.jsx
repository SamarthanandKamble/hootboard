import React from "react";
import { describe, expect, it } from "vitest";
import UserInput from "../src/Components/UserInput";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

describe("Landing Page", () => {
  it("Check if the input form is rendered", async () => {
    render(
      <Provider store={store}>
        <UserInput />
      </Provider>
    );
    expect(screen.getByRole("searchbox"))
    expect(screen.getByRole("button"))
  });
});
