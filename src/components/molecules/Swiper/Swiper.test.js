import { fireEvent, render, screen } from "@testing-library/react";

import InclusionCard from "../InclusionCard/InclusionCard";
import Swiper from "./Swiper";

const inclusions = [
  "ABC 5 Year Warranty",
  "Free Gift Boxing Shop Gifts",
  "Free Ship & Returns Learn More",
  "Make it Yours Cutomize and Monogram",
];

describe("Swiper Component", () => {
  test("renders product inclusion slides", () => {
    global.innerWidth = 400;

    // Trigger the window resize event.
    global.dispatchEvent(new Event("resize"));

    global.matchMedia = (media) => ({
      addListener: () => {},
      removeListener: () => {},
      matches: media === "(min-width: 400px)",
    });

    render(
      <Swiper show={2}>
        {inclusions.map((incl, index) => (
          <InclusionCard key={index} title={incl} />
        ))}
      </Swiper>
    );

    const titleElement = screen.getByText(inclusions[0]);
    expect(titleElement).toBeInTheDocument();

    const imgsEl = screen.getAllByAltText("Product Inclusion");
    fireEvent.touchStart(imgsEl[2], {
      touches: [{ clientX: 347, clientY: 534 }],
    });
    fireEvent.touchMove(imgsEl[2], {
      touches: [{ clientX: 134, clientY: 534 }],
    });
    const swiperContent = screen.getByTestId("swiper-content");

    expect(swiperContent.style.transform).toEqual("translateX(-75%)");
    fireEvent.touchStart(imgsEl[2], {
      touches: [{ clientX: 134, clientY: 534 }],
    });
    fireEvent.touchMove(imgsEl[2], {
      touches: [{ clientX: 347, clientY: 534 }],
    });
    expect(swiperContent.style.transform).toEqual("translateX(0%)");
  });
});
