import style from "./TextArea.module.css";

export const TextArea = ({ children, ...rest }) => {
  return (
    <textarea className={style.textarea} {...rest}>
      {children}
    </textarea>
  );
};
