import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => cleanup());

describe("Qarma Labs company website", () => {
  it("introduces Qarma Labs and presents its real service areas", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /building with intelligence/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /technology for people, businesses and ideas shaping what comes next/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Custom software" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "AI & automation" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "ICT & consultation" }),
    ).toBeInTheDocument();
  });

  it("links to the public Qarma Labs profiles and company work", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /start a conversation/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/qarmalabs/");
    expect(
      screen.getByRole("link", { name: /explore qm on github/i }),
    ).toHaveAttribute("href", "https://github.com/Qarma-Labs/harness1");
    expect(
      screen.getByText(/public fork of the open-source QM project/i),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: /^GitHub/ })
        .every(
          (link) =>
            link.getAttribute("href") === "https://github.com/Qarma-Labs",
        ),
    ).toBe(true);
  });

  it("switches the clearly labelled illustrative workflow example", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "A new enquiry arrives." }),
    ).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: "Show example 2: A daily task" }),
    );
    expect(
      screen.getByRole("heading", { name: "The same work, again." }),
    ).toBeInTheDocument();
    expect(screen.getByText(/illustrative examples/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Show example 2: A daily task" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("opens and closes accessible mobile navigation", async () => {
    const user = userEvent.setup();
    render(<App />);
    const openButton = screen.getByRole("button", { name: "Open navigation" });
    await user.click(openButton);
    expect(
      screen.getByRole("button", { name: "Close navigation" }),
    ).toHaveAttribute("aria-expanded", "true");
    await user.click(
      within(
        screen.getByRole("navigation", { name: "Main navigation" }),
      ).getByRole("link", { name: "What we do" }),
    );
    expect(
      screen.getByRole("button", { name: "Open navigation" }),
    ).toHaveAttribute("aria-expanded", "false");
  });
});
