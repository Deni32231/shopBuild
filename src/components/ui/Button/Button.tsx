import React, { FC } from "react";
import styles from "./button.module.css";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: any;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
