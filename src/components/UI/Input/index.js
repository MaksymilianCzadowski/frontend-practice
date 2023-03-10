import React from "react";
import styles from "./index.module.scss";

const Index = ({
  name,
  type,
  required,
  value,
  onChange,
  placeHolder,
  className,
  label,
  disabled,
}) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className={className}
        disabled={disabled}
      />
    </div>
  );
};

export default Index;
