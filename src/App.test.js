import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe("App tests", () => {
  test("renders correctly", () => {
    render(<App />);
    expect(screen.queryByText("one")).toBe(null)
  })
  test("adds a todo", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("to do"),{
      target: {
        value: "hola"
      }
    })
    
    fireEvent.click(screen.getByText("Add"))

    expect(screen.getByText("hola")).toBeDefined();
  })
})
