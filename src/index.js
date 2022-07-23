import React from "react";
import propTypes from "prop-types";
import style from "./style/status.module.scss";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiThetheringRounded } from "react-icons/md";

// if the proptype of error is true, use the red color,
// if not use the success color

const Status = ({ message, status, fill, outline }) => {
  return (
    <div
      className={`(${style.default} ${status === "error" ? style.error : ""})`}
    >
      <p>{message}</p>
      {status !== "error" ? <BsCheck2All /> : <MdWifiThetheringRounded />}
    </div>
  );
};

export default Status;

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
};
