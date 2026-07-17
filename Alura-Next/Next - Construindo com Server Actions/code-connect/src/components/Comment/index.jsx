import Image from "next/image";

import styles from "./Comment.module.css";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        width={32}
        height={32}
        alt={`${comment.author.name}'s avatar`}
      />
      <strong>@{comment.author.username}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
