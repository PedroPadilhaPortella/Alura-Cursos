'use server';

import { revalidatePath } from "next/cache";
import db from "../../prisma/db";

export async function incrementLikes(post) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await db.post.update({
      where: { id: post.id },
      data: { 
        likes: { 
          increment: 1 
        }
      },
  });

  revalidatePath('/');
  revalidatePath(`/${post.slug}`);
}

export async function postComment(post, formData) {
  const author = await db.user.findFirst({
    where: { username: 'anabeatriz_dev' }
  });

  await db.comment.create({
      data: { 
        text: formData.get('text'),
        authorId: author.id,
        postId: post.id
      },
  });

  revalidatePath('/');
  revalidatePath(`/${post.slug}`);
}

export async function postReply(parentComment, formData) {
  const author = await db.user.findFirst({
    where: { username: 'anabeatriz_dev' }
  });

  const post = await db.post.findFirst({
    where: {
      id: parentComment.postId
    }
  });

  await db.comment.create({
      data: { 
        text: formData.get('text'),
        authorId: author.id,
        postId: post.id,
        parentId: parentComment.parentId ?? parentComment.id,
      },
  });

  revalidatePath(`/${post.slug}`);
}