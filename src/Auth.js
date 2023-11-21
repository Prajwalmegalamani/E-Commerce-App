import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import getFromStorage from "./utils/getFromLocalStorage";

export default function Auth() {
  return (
    <div>
      {getFromStorage("isUserLoggedIn") ? (
        <Outlet />
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
}
