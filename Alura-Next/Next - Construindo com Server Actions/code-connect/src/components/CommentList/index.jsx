import { Comment } from "../Comment";
import { Replies } from "../Replies";
import { ReplyModal } from "../ReplyModal";

import styles from "./CommentList.module.css";

export const CommentList = ({ comments }) => {
  return (
    <div className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment key={comment.id} comment={comment} />
              <Replies comment={comment} />
              <ReplyModal comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
