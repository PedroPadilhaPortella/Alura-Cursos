"use client";

import { useRef } from "react";

import { postReply } from "@/actions";

import { SubmitButton } from "../SubmitButton";
import { TextArea } from "../Textarea";
import { Comment } from "../Comment";
import { Modal } from "../Modal";

import styles from "./ReplyModal.module.css";

export const ReplyModal = ({ comment }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const action = postReply.bind(null, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <TextArea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.button} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
