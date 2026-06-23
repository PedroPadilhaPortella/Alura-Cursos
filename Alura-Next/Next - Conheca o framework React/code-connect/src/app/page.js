import Link from "next/link"

import PostCard from "@/components/PostCard/PostCard";
import logger from "@/logger";

import styles from './page.module.css';

async function getPosts(page) {
  try {
    const response = await fetch(`http://localhost:3001/posts?_page=${page}&_per_page=6`);
    logger.info('API succeded to fetch posts');
    return response.json();
  } catch (error) {
    logger.error('API failed to fetch posts');
    return { data: [] };
  }
}

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const currentPage = params?.page || 1

  const { data: posts, prev, next } = await getPosts(currentPage);

  return (
   <main className={styles.container}>
    {posts.map((post) =>  <PostCard key={post.id} post={post} />)}
    {prev && <Link href={`/?page=${prev}`}>Anterior</Link>}
    {next && <Link href={`/?page=${next}`}>Próxima</Link>}
   </main>
  );
}
