"use client";

import { useState, useEffect } from "react";

import { ReplyModal } from "../ReplyModal";
import { Comment } from "../Comment";
import { Spinner } from "../Spinner";

import styles from "./Replies.module.css";

export const Replies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`/api/comment/${comment.id}/replies`);

      if (!response.ok) {
        throw new Error("Falha ao buscar respostas");
      }

      const data = await response.json();
      setReplies(data);
    } catch (error) {
      console.error(error);
      setReplies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (showReplies) {
      fetchData()
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.button}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
        {showReplies && (
          <>
            {loading && <Spinner color='#aaa' />}

            {!loading && replies.length === 0 && (
              <p className={styles.empty}>Nenhuma resposta ainda.</p>
            )}

            {!loading && replies.length > 0 && (
              <ul>
                {replies.map((reply) => (
                  <li key={reply.id}>
                    <Comment comment={reply} />
                    <ReplyModal comment={reply} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};
