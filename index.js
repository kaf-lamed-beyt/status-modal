import React from "react";
import propTypes from "prop-types";
import "@styles/globals.scss";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiThetheringRounded } from "react-icons/md";

// if the proptype of error is true, use the red color,
// if not use the success color

export default Status = ({ message, status, fill, outline }) => {
  return (
    <div
      className={`default ${status === "error" ? "default" : null} ${
        fill ? "fill" : null
      } ${outline ? "outline" : null}`}
    >
      <p>{message}</p>
      {status !== error ? <BsCheck2All /> : <MdWifiThetheringRounded />}
    </div>
  );
};

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
};
