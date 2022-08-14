import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Body } from "../Body/Body";

describe("<ConverterInput />", () => {
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
  });

  it("recieves a value", () => {
    render(<Body data={data} />);

    const textField = screen.getByDisplayValue("1");
    userEvent.type(textField, "20");
    expect(textField).toHaveDisplayValue("120");
  });
});
