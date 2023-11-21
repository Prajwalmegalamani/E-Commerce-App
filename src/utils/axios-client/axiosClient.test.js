import axios from "axios";

let AxiosClient;

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    create: () => {
      return {
        defaults: {
          baseURL: process.env.REACT_APP_BASE_URL,
          headers: {
            common: {
              "Content-Type": "application/json",
            },
          },
        },
      };
    },
  },
}));

describe("AxiosClient testing", () => {
  beforeEach(() => {
    AxiosClient = axios.create();
  });

  test("should create axios client", () => {
    expect(AxiosClient).toBeDefined();
  });

  test("axios client should have defaults config", () => {
    expect(AxiosClient.defaults.baseURL).toBe(process.env.REACT_APP_BASE_URL);
    expect(AxiosClient.defaults.headers.common["Content-Type"]).toBe(
      "application/json"
    );
  });
});
