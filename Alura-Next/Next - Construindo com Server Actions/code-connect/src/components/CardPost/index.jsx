import Image from "next/image";
import Link from "next/link";

import { incrementLikes, postComment } from "@/actions"
;
import { Avatar } from "../Avatar";
import { CommentModal } from "../CommentModal";

import { LikeButton } from "./LikeButton";
import styles from "./CardPost.module.css";

export const CardPost = ({ post, highlight }) => {

  const submitLike = incrementLikes.bind(null, post);
  const submitComment = postComment.bind(null, post);

  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            src={post.cover}
            fill
            alt={`Capa do post de titulo: ${post.title}`}
          />
        </figure>
      </header>

      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Ver detalhes
        </Link>
      </section>

      <footer className={styles.footer}>
        <div className={styles.actions}>
          <form action={submitLike}>
            <LikeButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <CommentModal action={submitComment} />
            <p>{post.comments.length}</p>
          </div>
        </div>
        
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
