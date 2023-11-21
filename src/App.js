import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/organisms/Footer";
import "./App.scss";
import Header from "./components/organisms/Header";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Routing from "./Routing";
import "./App.scss";
import { userActions } from "./redux/action.type";
import LoginModal from "./components/organisms/login/LoginModal";
import Modal from "./components/atoms/modal/Modal";
import getFromStorage from "./utils/getFromLocalStorage";

function App() {
  const dispatch = useDispatch();
  let { isModalOpen } = useSelector((state) => state.products);

  useEffect(() => {
    if (getFromStorage("isUserLoggedIn")) {
      dispatch({
        type: userActions.SET_USER_LOGIN_STATUS,
        payload: true,
      });
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <main id="maincontent">
        <Toaster position="top-right" reverseOrder={false} />
        <Routing></Routing>
      </main>
      <LoginModal />
      {isModalOpen && <Modal />}
      <Footer />
    </>
  );
}

export default App;
