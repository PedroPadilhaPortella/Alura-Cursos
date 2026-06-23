import Image from 'next/image';
import Link from 'next/link';

import Avatar from '../Avatar/Avatar';

import styles from './PostCard.module.css';

const PostCard = ({ post, highlight  }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486}}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133}}>
            <Image src={post.cover} fill alt={`${post.title} banner`} />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar name={post.author.username} imageSrc={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
};

export default PostCard;
