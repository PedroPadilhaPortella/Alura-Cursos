import { ReactNode, ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import Styles from "./Button.module.css";

export type ButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(Styles[variant], Styles[size])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
