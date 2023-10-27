import { render } from "@testing-library/react";
import PostBody from "../components/post-body";
import "@testing-library/jest-dom";

describe("PostBody", () => {
  it("renders the post content", () => {
    const content = {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "This is the post content.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
    };

    const { getByText } = render(<PostBody content={content} />);

    expect(getByText("This is the post content.")).toBeInTheDocument();
  });
});
