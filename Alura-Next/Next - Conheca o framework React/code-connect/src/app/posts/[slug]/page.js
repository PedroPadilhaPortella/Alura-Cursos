import { remark } from 'remark';
import html from 'remark-html';

import logger from "@/logger";

import PostCard from "@/components/PostCard/PostCard";

import styles from './page.module.css';

async function getPost(slug) {
  try {
    const response = await fetch(`http://localhost:3001/posts?slug=${slug}`);
    logger.info('API succeded to fetch post');
    const data = await response.json();

    if (data.length === 0) {
      logger.error(`No posts returned with ${slug} slug`);
      return {};
    }

    const post = data[0];

    const processedContent = await remark()
      .use(html)
      .process(post.markdown);

    const contentHtml = processedContent.toString();

    return { ...post, markdown: contentHtml };

  } catch (error) {
    logger.error(`API failed to fetch post with ${slug} slug`);
    return {};
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  console.warn(post)

  return (
    <div>
      <PostCard post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
}
