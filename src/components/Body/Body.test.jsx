import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Body } from "./Body";

describe("<Body />", () => {
  const data = {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate",
    },
    success: true,
    base: "USD",
    date: "2022-08-12",
    rates: {
      EUR: 0.968511,
      UAH: 36.968115,
      USD: 1,
    },
  };

  it("renders correctly", () => {
    render(<Body data={data} />);

    const textFields = screen.getAllByRole("textbox");
    expect(textFields[0]).toBeInTheDocument();
    expect(textFields[1]).toBeInTheDocument();

    const icon = screen.getByTestId("MultipleStopIcon");
    expect(icon).toBeInTheDocument();
  });

  it("calculates the correct values", () => {
    render(<Body data={data} />);

    const textFields = screen.getAllByRole("textbox");
    expect(textFields[0]).toHaveDisplayValue("1");
    expect(textFields[1]).toHaveDisplayValue("38.17");
  });
});
