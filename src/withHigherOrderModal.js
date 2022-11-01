import React, { useState } from "react";

export const withHigherOrderModal =
  (ModalComponent) => (WrappedComponent) => (props) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const showModal = (item) => {
      setData(item);

      if (show) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    const closeModal = () => {
      setShow(false);
      setData(null);
    };

    return (
      <>
        <h1>withHigherOrderModal</h1>
        <WrappedComponent {...props} showModal={showModal} />
        {show ? (
          <ModalComponent item={data} closeModal={closeModal} show={show} />
        ) : (
          ""
        )}
      </>
    );
  };
