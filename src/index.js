import React from "react";
import propTypes from "prop-types";
import style from "./style/status.scss";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiThetheringRounded } from "react-icons/md";

const Status = ({ message, status }) => {
  return (
    <div
      className={`(${style.default} ${status === "error" ? style.error : ""})`}
    >
      <p>{message}</p>
      {status !== "error" ? <BsCheck2All /> : <MdWifiThetheringRounded />}
    </div>
  );
};

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
};

export { Status };
