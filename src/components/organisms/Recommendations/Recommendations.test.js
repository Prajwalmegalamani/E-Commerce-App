import React from "react";
import { render, screen } from "@testing-library/react";
import Recommendations from './Recommendations';

describe("Testing Recommendations", () => {
  it('should render text headding', () => {
    render( <Recommendations/>)
    
    const linkElement = screen.getByText("You Might Also Like");
    expect(linkElement).toBeInTheDocument();
  })

  it('should render 3 recommended products', () => {
    render( <Recommendations/>)
    
    setTimeout(()=>{
      const titleElements = screen.getAllByRole("heading", { level: 5 })
      expect(titleElements).toHaveLength(3)
    }, 2000)
  })
})