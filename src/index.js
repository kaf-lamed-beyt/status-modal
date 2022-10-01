import React, {useState } from "react";
import propTypes from "prop-types";
import "./style/status.scss";
import ReactPortal from "./components/ReactPortal";
import StatusInner from "./components/StatusInner";

const Status = ({ wrapperId, ...props }) => {
  const [removeElement, setRemoveElement] = useState(false);

  const createWrapperElement = (wrapperId) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.append(wrapperElement);
    return wrapperElement;
  };

  let wrapperRoot = document.getElementById(wrapperId);
  if (!wrapperRoot) {
    wrapperRoot = createWrapperElement(wrapperId);
  }

  if (removeElement) return null;

  return (
    <>
      <ReactPortal root={wrapperRoot}>
        <StatusInner {...props} setRemoveElement={setRemoveElement} />
      </ReactPortal>
    </>
  );
};

Status.defaultProps = {
  error: false,
  wrapperId: "status-modal-root",
  autoClose: true,
  duration: 5000,
};

propTypes.Status = {
  message: propTypes.string.isRequired,
  status: propTypes.string,
  error: propTypes.bool,
  wrapperId: propTypes.string,
  onClose: propTypes.func,
  autoClose: propTypes.bool,
  duration: propTypes.number,
};

export { Status };
