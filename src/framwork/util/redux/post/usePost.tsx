import { useSelector } from 'react-redux';
import IPostEntity from '../../../../domain/entity/post/interface';
import { StoreType } from '../../../module/redux/store';

const usePost = (): IPostEntity[] => {
  const post = useSelector((state: StoreType) => state.PostReducer.post);
  return post;
};

export default usePost;
