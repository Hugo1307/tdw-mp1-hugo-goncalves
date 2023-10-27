import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentfulImage from "../components/contentful-image";

describe("ContentfulImage", () => {
  it("renders an Image component", () => {
    const props = {
      src: "https://images.ctfassets.net/aovs17h9ahmh/5hxOyU0x7aXhgDRHg8bYKg/652fca9377c6bf8578db6f2ca7777ac8/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
      width: 500,
      height: 100,
      quality: 75,
      alt: "A cat sitting on a pile of leaves",
    };

    render(<ContentfulImage {...props} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining(props.src));
    expect(image).toHaveAttribute("width", props.width.toString());
    expect(image).toHaveAttribute("height", props.height.toString());
    expect(image).toHaveAttribute("alt", props.alt);
  });
});
