import { InputHTMLAttributes } from "react";
import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  variant = "primary",
  id,
  ...props
}: InputProps) => {
  return (
    <input
      className={Styles[variant]}
      {...props}
      id={id}
    />
  );
};

export default Input;
