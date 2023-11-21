import AxiosClient from "../axios-client/axiosClient";
import { notifyError, notifySuccess } from "../helper";

export const successHandler = (successResponse) => {
  notifySuccess(successResponse.statusText);
};

export const errorHandler = (errorResponse) => {
  if (errorResponse && errorResponse.status === 500) {
    notifyError("Something went wrong please contact system admin!");
  } else if (errorResponse && errorResponse.status !== 500) {
    if (
      errorResponse.data.errors &&
      Object.keys(errorResponse.data.errors).length > 0
    ) {
      errorResponse.data.errors.map((err) =>
        notifyError(err || "Something went wrong")
      );
    } else if (errorResponse.data.message) {
      notifyError(errorResponse.data.message);
    } else if (typeof errorResponse.data === "string") {
      notifyError(errorResponse.data);
    }
  }
};

const setUpAxiosClientInterceptor = (store) => {
  // Axios - Request Interceptor
  AxiosClient.interceptors.request.use(
    (requestConfig) => {
      return requestConfig;
    },
    (error) => {
      errorHandler(error);
      return Promise.reject(error);
    }
  );

  // Axios - Response Interceptor
  AxiosClient.interceptors.response.use(
    (response) => {
      //successHandler(response);
      return response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 403) {
          // TODO Redirect unauthorized user to login
        }
        errorHandler(error.response);
        return error.response;
      } else {
        errorHandler(error);
        return Promise.reject(error);
      }
    }
  );
};

export default setUpAxiosClientInterceptor;
