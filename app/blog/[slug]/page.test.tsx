/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("renders slug from params", () => {
  render(<Page params={{ slug: "Test" }} /> as any);

  expect(screen.getByRole("heading")).toHaveTextContent("Test");
});
