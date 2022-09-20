import React from "react";
import propTypes from "prop-types";
import { BsCheck2All } from "react-icons/bs/";
import { BiErrorCircle } from "react-icons/bi";
import "./style/status.scss";

const Status = ({ message, status }) => {
  return (
    <div className={`default ${status === "error" && "error"}`}>
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
