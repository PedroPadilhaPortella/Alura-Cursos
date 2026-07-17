"use client";

import { useRef } from "react";

import { IconButton } from "../IconButton";
import { TextArea } from "../TextArea";
import { Modal } from "../Modal";
import { ArrowFoward, Chat } from "../icons";

import { SubmitButton } from "../SubmitButton";

import styles from "./CommentModal.module.css";

export const CommentModal = ({ action }) => {
  const modalRef = useRef(null);

  return (
    <>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>

      <Modal ref={modalRef}>
        <form
          action={action}
          onSubmit={() => modalRef.current.closeModal()}
        >
          <h2 className={styles.header}>Deixe seu comentário sobre o post:</h2>
          <TextArea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>
              <span>Comentar</span>
              <ArrowFoward />
            </SubmitButton>
          </div>
        </form>
      </Modal>
    </>
  );
};
