import React from "react";
import SearchBar from "../SearchBar";
import { render, fireEvent, screen } from "@testing-library/react";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test("should search when search text change", async () => {
  const handleSearch = jest.fn();
  const handleAddRecentViewed = jest.fn();

  render(
    <SearchBar
      data={[]}
      onSearch={handleSearch}
      loading={false}
      onAddRecentViewed={handleAddRecentViewed}
    />
  );

  fireEvent.change(screen.getByRole("combobox"), { target: { value: 'test1'}});
  fireEvent.change(screen.getByRole("combobox"), { target: { value: 'test2'}});
  fireEvent.change(screen.getByRole("combobox"), { target: { value: 'test3'}});

  expect(handleSearch).toBeCalledTimes(1);
})

