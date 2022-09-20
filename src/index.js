import React from "react";
import propTypes from "prop-types";
import { BsCheck2All } from "react-icons/bs/";
import { BiErrorCircle } from "react-icons/bi";

const Status = ({ message, status }) => {
  return (
    <div
      className={`(var(--{style.default} var(--{status === "error" ? style.error : ""})`}
    >
      <p>{message}</p>
      {status !== "error" ? <BsCheck2All /> : <BiErrorCircle />}
    </div>
  );
};

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
};

export { Status };
