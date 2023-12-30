import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

/*
 ** **
 ** ** ** Test Suite [App Commponent]
 ** **
 */
describe("<App/> Component", () => {
  it("Should render in the DOM", () => {
    const { getByTestId } = render(<App data-testid="app" />);

    expect(getByTestId("app")).toBeInTheDocument();
  });
});
