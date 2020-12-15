import { GET_MY_POSTS, GET_POSTS, SET_MY_POSTS, SET_POSTS } from '../../action/post/interface';
import PostEntity from '../../../../../domain/entity/post';
import { IPostReducer, IPostState } from './interface';

const initState: IPostState = {
  post: [
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
  ],
  mypost: [
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
    new PostEntity(
      '테스트 글',
      'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, ,hello world',
      ['#테스트'],
      false,
    ),
  ],
};

const PostReducer: IPostReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return state;
    }
    case SET_POSTS: {
      return {
        ...state,
        post: action.payload,
      };
    }
    case GET_MY_POSTS: {
      return state;
    }
    case SET_MY_POSTS: {
      return {
        ...state,
        mypost: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default PostReducer;
