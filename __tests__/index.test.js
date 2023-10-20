import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const postsList = [
      {
        slug: "post-3",
        title: "Post 3",
        date: "2023-10-19T00:00:00.000+01:00",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        coverImage: {
          url: "https://images.ctfassets.net/aovs17h9ahmh/5hxOyU0x7aXhgDRHg8bYKg/652fca9377c6bf8578db6f2ca7777ac8/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
        },
        content: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
          links: {
            assets: {
              block: [],
            },
          },
        },
        author: {
          name: "Francisco",
          picture: {
            url: "https://images.ctfassets.net/aovs17h9ahmh/6nGERw8aBqVqWXZ4VouIII/a831fe80d8bf707e698cb82df90a2873/O_18006217465753396.jpg",
          },
        },
      },
    ];

    render(<Index allPosts={postsList} />);

    const heading = screen.getByText("Blog.");

    expect(heading).toBeInTheDocument();
  });
});
