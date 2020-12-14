import { IGetPosts, GET_POSTS } from './interface';

export const getPosts = (): IGetPosts => ({
  type: GET_POSTS,
});
