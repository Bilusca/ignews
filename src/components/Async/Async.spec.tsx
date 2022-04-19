import { render, screen, waitFor } from "@testing-library/react";
import { Async } from ".";

test("it renders correctly", async () => {
  render(<Async />);

  expect(screen.getByText("Async")).toBeInTheDocument();

  await waitFor(() => {
    return expect(screen.getByText("Visible button")).toBeInTheDocument();
  });
});
