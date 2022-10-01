import React from "react";
import propTypes from "prop-types";
import { BsCheck2All } from "react-icons/bs/";
import { BiErrorCircle } from "react-icons/bi";
import "./style/status.scss";

const Status = ({ message, status, error }) => {
  return (
    <div className={`default ${status === "error" || error ? "error" : ""}`}>
      <p>{message}</p>
      {(status === "error" || error) ? <BiErrorCircle /> : <BsCheck2All /> } 
    </div>
  );
};

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
  error: propTypes.bool,
};

export { Status };
