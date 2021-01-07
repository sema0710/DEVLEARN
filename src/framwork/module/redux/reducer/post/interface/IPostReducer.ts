import PostEntity from '../../../../../../domain/entity/post';
import { IPostAction } from '../../../action/post/interface';

export interface IPostState {
  post: PostEntity[];
  mypost: PostEntity[];
  detailPost: PostEntity;
  answer: PostEntity[];
}

export interface IPostReducer {
  (state: IPostState, action: IPostAction): IPostState;
}
