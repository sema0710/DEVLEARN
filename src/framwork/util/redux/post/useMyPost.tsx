import { useSelector } from 'react-redux';
import IPostEntity from '../../../../domain/entity/post/interface';
import { StoreType } from '../../../module/redux/store';

const useMyPost = (): IPostEntity[] => {
  const post = useSelector((state: StoreType) => state.PostReducer.mypost);
  return post;
};

export default useMyPost;
