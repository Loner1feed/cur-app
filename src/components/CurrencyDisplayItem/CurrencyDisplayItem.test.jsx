import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CurrencyDisplayItem } from "./CurrencyDisplayItem";

describe("<CurrencyDisplayItem />", () => {
  const rates = {
    EUR: 0.968511,
    UAH: 36.968115,
    USD: 1,
  };

  it("renders correctly", () => {
    render(<CurrencyDisplayItem base="USD" searched="UAH" rates={rates} />);

    expect(screen.getByText(/USD/)).toBeInTheDocument();
    expect(screen.getByText(/36.97/)).toBeInTheDocument();
  });
});
