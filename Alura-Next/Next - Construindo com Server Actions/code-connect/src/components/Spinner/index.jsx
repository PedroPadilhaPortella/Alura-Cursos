import styles from "./Spinner.module.css";

export const Spinner = ({ color }) => {
  return (
    <span
      className={styles.loader}
      style={color ? { "--color-1": color } : undefined}
    ></span>
  );
};
