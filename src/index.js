import React from "react";
import propTypes from "prop-types";
import style from "./style/status.module.scss";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiTetheringErrorRounded } from "react-icons/md";

// if the proptype of error is true, use the red color,
// if not use the success color
const Status = ({ message, status }) => {
  return (
    <div className={status === "error" ? style.error : style.default}>
      <p>{message}</p>
      {status !== "error" ? <BsCheck2All /> : <MdWifiTetheringErrorRounded />}
    </div>
  );
};

export default Status;

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
};
