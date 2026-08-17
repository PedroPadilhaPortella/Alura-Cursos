import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

import * as data from '../db.json';
import { Postagem } from '../models/post.model';

export const postsResolver: ResolveFn<Postagem | undefined> = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');

  const posts: Postagem[] = data.posts;

  return posts.find(post => post.id === id);
};
