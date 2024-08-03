import {render, screen} from "@testing-library/react";
import TagItem from "./index.jsx";

const tag = "Sample Tag";

describe("TagItem", () => {
  test("renders tag text correctly", () => {
    render(<TagItem tag={tag} />);
    expect(screen.getByText(tag)).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    const {container} = render(<TagItem tag="" />);
    expect(container).toBeInTheDocument();
  });
});
