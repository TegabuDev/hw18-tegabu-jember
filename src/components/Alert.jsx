import React from "react";
import { useUser } from "../context/AuthProvider";

const alertStyles = {
  padding: "12px",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: 400,
  width: "390px",
  marginLeft: "30px",
};

const severityStyles = {
  success: {
    color: "#0f5132",
    backgroundColor: "#d1e7dd",
  },
  info: {
    color: "#055160",
    backgroundColor: "cff4fc",
  },
  warning: {
    color: "#664d03",
    backgroundColor: "fff3cd",
  },
  danger: {
    color: "#842029",
    backgroundColor: "#f8d7da",
  },
};

const Alert = () => {
  const { customAlert } = useUser();

  if (!customAlert) {
    return null;
  }

  const fullStyles = {
    ...alertStyles,
    ...severityStyles[customAlert.type],
  };
  return <div style={fullStyles}>{customAlert.text}</div>;
};

export default Alert;
