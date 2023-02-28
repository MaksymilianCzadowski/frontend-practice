import React from "react";

const Index = ({ title, type, onClick, className, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {title}
    </button>
  );
};

export default Index;
