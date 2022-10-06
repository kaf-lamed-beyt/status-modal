import React, {useState } from "react";
import propTypes from "prop-types";
import "./style/status.scss";
import Portal from "./components/Portal";
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
      <Portal root={wrapperRoot}>
        <StatusInner {...props} setRemoveElement={setRemoveElement} />
      </Portal>
    </>
  );
};

Status.defaultProps = {
  error: false,
  wrapperId: "status-modal-root",
  autoClose: true,
  duration: 3000,
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
