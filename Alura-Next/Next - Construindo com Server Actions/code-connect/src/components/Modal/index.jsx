'use client';

import { forwardRef, useRef, useImperativeHandle } from "react";

import styles from './Modal.module.css';

export const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  }

  const closeModal = () => {
    dialogRef.current.close();
  }

  useImperativeHandle(ref, () => {
    return { openModal, closeModal};
  });

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <header className={styles.header}>
        <button onClick={closeModal}>X</button>
      </header>
      {children}
    </dialog>
  );
});