import { GET_POSTS } from '../../action/post/interface';
import PostEntity from '../../../../../domain/entity/post';
import { IPostReducer, IPostState } from './interface';

const initState: IPostState = {
  post: [
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
    ),
  ],
};

const PostReducer: IPostReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default PostReducer;
