import styles from './IconButton.module.css';

export const IconButton = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
}