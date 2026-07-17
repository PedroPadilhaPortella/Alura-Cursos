import { CardPost } from "@/components/CardPost"
import logger from "@/logger"

import styles from './page.module.css'
import Link from "next/link"
import db from "../../prisma/db"

async function getAllPosts (page, searchQuery) {
  try {
    const where = {};

    if(searchQuery) {
      where.title = { 
        contains: searchQuery,
        mode: 'insensitive'
      }
    }

    const itemsPerPage = 4;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const skip = (page - 1) * itemsPerPage;

    const prev = (page > 1) ? page - 1 : null 
    const next = (page < totalPages) ? page + 1 : null
    
    const posts = await db.post.findMany({
      take: itemsPerPage,
      skip,
      where,
      orderBy: { id: 'desc' },
      include: { author: true, comments: true }
    })

    return { data: posts, prev, next }
    
  } catch (error) {
    logger.error('Falha ao obter posts', { error })
    return { data: [], prev: null, next: null }
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1)
  const searchQuery = searchParams?.q || '';

  const { data: posts, prev, next } = await getAllPosts(currentPage, searchQuery);

  return (
    <main className={styles.grid}>
      {posts.map(post =>  <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchQuery } }}>Página anterior</Link>}
        {next && <Link href={{ pathname: '/', query: { page: next, q: searchQuery } }}>Próxima página</Link>}
      </div>
    </main>
  )
}
