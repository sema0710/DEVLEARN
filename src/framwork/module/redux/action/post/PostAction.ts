import IPostEntity from 'src/domain/entity/post/interface/IPostEntity';
import {
  IGetPosts,
  IGetMyPosts,
  ISetMyPost,
  ISetPost,
  GET_POSTS,
  SET_MY_POSTS,
  SET_POSTS,
  GET_MY_POSTS,
} from './interface';

export const getPosts = (): IGetPosts => ({
  type: GET_POSTS,
});

export const setPosts = (payload: IPostEntity[]): ISetPost => ({
  type: SET_POSTS,
  payload,
});

export const getMyPosts = (): IGetMyPosts => ({
  type: GET_MY_POSTS,
});

export const setMyPosts = (payload: IPostEntity[]): ISetMyPost => ({
  type: SET_MY_POSTS,
  payload,
});
