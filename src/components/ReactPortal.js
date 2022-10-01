import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const ReactPortal = ({root, children}) => {
  const [wrapperElement, setWrapperElement] = useState(null);
  const statusModalElement = document.createElement("div");
  statusModalElement.className = "status-modal-container";

  useLayoutEffect(() => {
    const _wrapperElement = root.appendChild(statusModalElement);
    setWrapperElement(_wrapperElement);
    return () => {
      root.removeChild(_wrapperElement);
    };
  }, []);

  if (wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
};

export default ReactPortal;
