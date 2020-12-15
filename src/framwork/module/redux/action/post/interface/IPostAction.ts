import IPostEntity from '../../../../../../domain/entity/post';

export const GET_MY_POSTS = 'POST/GET_MY_POSTS' as const;
export const GET_POSTS = 'POST/GET_POSTS' as const;
export const SET_POSTS = 'POST/SET_POSTS' as const;
export const SET_MY_POSTS = 'POST/SET_MY_POSTS' as const;

export interface IGetPosts {
  type: typeof GET_POSTS;
}

export interface IGetMyPosts {
  type: typeof GET_MY_POSTS;
}

export interface ISetPost {
  type: typeof SET_POSTS;
  payload: IPostEntity[];
}

export interface ISetMyPost {
  type: typeof SET_MY_POSTS;
  payload: IPostEntity[];
}

export type IPostAction = IGetPosts | ISetPost | IGetMyPosts | ISetMyPost;
