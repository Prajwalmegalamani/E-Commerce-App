import React from "react";

export default function Loader() {
  return (
    <>
      <div className="overlay"></div>
      <div className="loader-container">
        <div className="loader" data-testid="loader"></div>
      </div>
    </>
  );
}
