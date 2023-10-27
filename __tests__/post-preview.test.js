import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostPreview from "../components/post-preview";

describe("PostPreview", () => {
  const title = "My Blog Post";
  const date = "October 26, 2023";

  const author = {
    name: "Hugo Gonçalves",
    picture: "https://tdw-mctw.dev/some-image.png",
  };

  it("renders the title, date, and author", () => {
    render(
      <PostPreview
        title={title}
        date={date}
        author={author}
        coverImage={{ url: "https://tdw-mctw.dev/some-image.png" }}
        excerpt="This is a blog post"
        slug="post"
      />,
    );

    const titleElement = screen.getByText(title);
    const dateElement = screen.getByText(date);
    const authorElement = screen.getByText(author.name);
    const images = screen.getAllByRole("img");

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();

    // The post preview should have two images: the cover image and the author's profile picture
    expect(images.length).toBe(2);

    expect(images[0]).toHaveAttribute(
      "src",
      expect.stringContaining(author.picture),
    );
  });
});
