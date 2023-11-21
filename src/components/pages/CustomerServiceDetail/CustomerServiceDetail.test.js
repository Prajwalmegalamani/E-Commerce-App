import { render, screen } from "@testing-library/react";
import CustomerServiceDetail from "./CustomerServiceDetail";

const serviceType = { serviceType: "warranty" };
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => serviceType,
}));

describe("Warranty Test Suite", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            heading: "Product Information And Warranty",
            content:
              "Welcome to the world of ABC - the leading international brand of travel, business and lifestyle accessories. Since 1975, ABC has been dedicated to providing our customers with an outstanding ownership experience. ABC’s comprehensive product coverage is reflective of our commitment to our consumer’s ongoing satisfaction. Specifically, we make three commitments to our customers: You will enjoy using our innovative products that are designed and manufactured to be the best; You will experience world-class, after-sales customer service; For five (5) years after you purchase a ABC product from one of our travel, business, or bag collections, or two (2) years for any wallet or accessory, from an authorized ABC store or dealer, you will be covered by our Limited Warranty. ABC’s warranty extends to the original owner; it is straightforward and comprehensive, and just part of the total ABC ownership experience. Should you have additional questions, please email info@abc.com or call 800.299.ABC (8864) from 8:00 AM to 5:00 PM EST to speak live with a consumer affairs representative.",
          },
        ]),
    });
  });

  it("CustomerService", async () => {
    render(<CustomerServiceDetail />);
    const heading = await screen.findByText("Product Information And Warranty");
    expect(heading).toBeInTheDocument();
    const content = await screen.findByText(
      "Welcome to the world of ABC - the leading international brand of travel, business and lifestyle accessories. Since 1975, ABC has been dedicated to providing our customers with an outstanding ownership experience. ABC’s comprehensive product coverage is reflective of our commitment to our consumer’s ongoing satisfaction. Specifically, we make three commitments to our customers: You will enjoy using our innovative products that are designed and manufactured to be the best; You will experience world-class, after-sales customer service; For five (5) years after you purchase a ABC product from one of our travel, business, or bag collections, or two (2) years for any wallet or accessory, from an authorized ABC store or dealer, you will be covered by our Limited Warranty. ABC’s warranty extends to the original owner; it is straightforward and comprehensive, and just part of the total ABC ownership experience. Should you have additional questions, please email info@abc.com or call 800.299.ABC (8864) from 8:00 AM to 5:00 PM EST to speak live with a consumer affairs representative."
    );
    expect(content).toBeInTheDocument();
  });
});
