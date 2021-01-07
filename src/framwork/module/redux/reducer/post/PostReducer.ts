import { GET_MY_POSTS, GET_POSTS, SET_MY_POSTS, SET_POSTS } from '../../action/post/interface';
import PostEntity from '../../../../../domain/entity/post';
import { IPostReducer, IPostState } from './interface';
import { GET_DETAIL_POST, IPostAction } from '../../action/post/interface/IPostAction';

const initState: IPostState = {
  post: [
    new PostEntity(
      '테스트 글',
      'test',
      ['#테스트'],
      [{ type: 'text', content: '테스트 글' }],
      false,
    ),
  ],
  mypost: [
    new PostEntity(
      '테스트 글',
      'test',
      ['#테스트'],
      [{ type: 'text', content: '테스트 글' }],
      false,
    ),
  ],
  detailPost: new PostEntity(
    '테스트 글',
    'test',
    ['#테스트'],
    [
      { type: 'code', content: 'import test' },
      { type: 'text', content: '테스트 글1' },
      { type: 'text', content: '테스트 글3' },
      { type: 'list', content: ['테스트 글4', '테스트 글5'] },
    ],
    false,
  ),
  answer: [
    new PostEntity('테스트 글', 'test', [], [{ type: 'text', content: '테스트 글' }], false),
  ],
};

const PostReducer: IPostReducer = (state: IPostState = initState, action: IPostAction) => {
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
    case GET_DETAIL_POST: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default PostReducer;
