import { GET_USER } from '../../action/user/interface';
import { IUserReducer, IUserState } from './interface';

const initState: IUserState = {
  userName: '오준상',
  img: null,
  description: '제가 아는 모든것을 설명할 줄 아는 사람이 되고싶습니다.',
  id: 1,
};

const UserReducer: IUserReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
