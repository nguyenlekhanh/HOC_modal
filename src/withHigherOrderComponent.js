import React, { useState } from "react";

export const withHigherOrderComponent =
  (Component) => (SecondComponent) => (props) => {
    const [show, setShow] = useState(true);
    return (
      <>
        <h1>withHigherOrderComponent</h1>
        <SecondComponent />
        {show ? <Component {...props} /> : ""}
      </>
    );
  };
