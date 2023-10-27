import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostTitle from "../components/post-title";

describe("PostTitle", () => {
  it("renders the title text", () => {
    const titleText = "My Blog Post";

    render(<PostTitle>{titleText}</PostTitle>);

    const titleElement = screen.getByText(titleText);

    expect(titleElement).toBeInTheDocument();
  });
});
