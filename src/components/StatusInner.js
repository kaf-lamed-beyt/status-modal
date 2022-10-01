import React, { useState, useEffect, useRef } from "react";
import { BsCheck2All } from "react-icons/bs/";
import { BiErrorCircle } from "react-icons/bi";
import { BsXCircle } from "react-icons/bs/";

const defaultConfig = {
  closingAnimationDuration: 3000,
};

const StatusInner = ({
  message,
  status,
  error,
  onClose,
  autoClose,
  duration,
  setRemoveElement,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);
  let timer;
  let removeElementTimer;
  const startTimer = () => {
    timer = setTimeout(() => {
      setIsOpen(false);
    }, duration);
    removeElementTimer = setTimeout(() => {
      setRemoveElement(true);
    }, duration + defaultConfig.closingAnimationDuration);
  };

  const clearTimers = () => {
    clearTimeout(timer);
    clearTimeout(removeElementTimer);
  };

  const handleMouseEnter = () => {
    clearTimers();
    setIsOpen(true);
    startTimer();
  };

  useEffect(() => {
    if (autoClose) startTimer();
    const statusModalElement = ref.current;
    if (statusModalElement) {
      statusModalElement.addEventListener("mouseenter", handleMouseEnter);
    }
    return () => {
      clearTimers();
      statusModalElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`default ${status === "error" || error ? "error" : ""} ${
        isOpen ? "" : "onClose"
      }`}
    >
      <div className="tool-bar">
        <button
          className="no-style-btn"
          onClick={() => {
            setIsOpen(false);
            {
              onClose && onClose();
            }
          }}
        >
          <BsXCircle />
        </button>
        {status === "error" || error ? <BiErrorCircle /> : <BsCheck2All />}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default StatusInner;
