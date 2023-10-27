import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/alert";
import "@testing-library/jest-dom";

describe("Alert", () => {
  it("renders the preview message", () => {
    render(<Alert preview={true} />);

    const previewMessage = screen.getByText("Click here");

    expect(previewMessage).toBeInTheDocument();
  });
});
