import axios from "axios";
import { successHandler, errorHandler } from "./axiosInterceptor";
import { notifyError, notifySuccess } from "../helper";

let axiosClient;

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    create: () => {
      return {
        interceptors: {
          request: { use: jest.fn(() => {}) },
          response: { use: jest.fn(() => {}) },
        },
      };
    },
  },
}));

jest.mock("../helper", () => {
  return {
    notifyError: () => {},
    notifySuccess: () => {},
  };
});

beforeEach(() => {
  axiosClient = axios.create();
  axiosClient.interceptors.request.use.mockReset();
  axiosClient.interceptors.response.use.mockReset();
});

describe("AxiosInterceptor testing", () => {
  test("success handler to notify success message", () => {
    const payload = {
      status: 200,
      statusText: "OK",
    };

    axiosClient.interceptors.response.use = jest.fn(() => {
      successHandler(payload);
      expect(successHandler(payload)).toBe(notifySuccess(payload.statusText));
    });
  });

  test("error handler to notify error message for 404 - not found", () => {
    const payload = {
      status: 404,
      data: "not found!",
      statusText: "Not Found",
    };

    axiosClient.interceptors.response.use = jest.fn((errorCallback) => {
      errorHandler(payload);
      expect(errorHandler(payload)).toBe(notifyError(payload.data));
    });
  });

  test("error handler to notify error message for 403 - forbidden or authentication problem", () => {
    const payload = {
      status: 403,
      data: {
        message: "Authentication Problem",
      },
      statusText: "Forbidden",
    };

    axiosClient.interceptors.response.use = jest.fn(() => {
      errorHandler(payload);
      expect(errorHandler(payload)).toBe(notifyError(payload.data.message));
    });
  });
});
