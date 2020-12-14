import { useSelector } from 'react-redux';
import { StoreType } from '../../../module/redux/store';

export const usePost = () => {
  const post = useSelector((state: StoreType) => state.PostReducer.post);
  return post;
};
