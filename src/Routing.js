import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import CategoriesPage from "./components/pages/CategoriesPage";
import UserAuth from "./components/pages/UserAuth";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import CheckOutPage from "./components/pages/CheckoutPage";
import OrderConfirmationPage from "./components/pages/OrderConfirmationPage";
import ProductsListingPage from "./components/pages/ProductsListingPage";
import SearchPage from "./components/pages/search/SearchPage";
import Auth from "./Auth";
import UserProfilePage from "./components/pages/UserProfile/UserProfilePage";

const CustomerServiceDetail = React.lazy(() =>
  import("./components/pages/CustomerServiceDetail/CustomerServiceDetail")
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="customer-service/:serviceType"
        element={
          <React.Suspense fallback="Loading...">
            <CustomerServiceDetail />
          </React.Suspense>
        }
      ></Route>
      <Route path="cart" element={<CartPage />}></Route>
      <Route path="category" element={<CategoriesPage />}></Route>
      <Route path="userauth" element={<UserAuth />}></Route>
      <Route path="checkout" element={<CheckOutPage />}></Route>
      <Route
        path="order-confirmation"
        element={<OrderConfirmationPage />}
      ></Route>
      <Route path="product/:id" element={<ProductDetailsPage />}></Route>
      <Route path="category" element={<CategoriesPage />}></Route>
      <Route path="products" element={<ProductsListingPage />}></Route>
      <Route
        path="products/:category"
        element={<ProductsListingPage />}
      ></Route>
      <Route path="search" element={<SearchPage />}></Route>

      <Route element={<Auth />}>
        <Route path="myaccount" element={<UserProfilePage />}></Route>
      </Route>
    </Routes>
  );
}

export default Routing;
