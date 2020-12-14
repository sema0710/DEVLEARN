import PostEntity from '../../../../../../domain/entity/post';
import { IPostAction } from '../../../action/post/interface';

export type PostList = PostEntity[];

export interface IPostState {
  post: PostEntity[];
}

export interface IPostReducer {
  (state: IPostState, action: IPostAction): IPostState;
}
