import React from "react";
import "./UserAuth.scss";
import SignUp from "../organisms/SignUp/index";
import Signin from "../organisms/signin/Signin";

export default function UserAuth() {
  return (
    <div className="loginPageContainer">
      {/* <div className="loginContainer">Login</div> */}
      <Signin className="loginContainer" />
      <SignUp />
    </div>
  );
}
