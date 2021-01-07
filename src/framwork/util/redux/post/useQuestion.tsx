import { useSelector } from 'react-redux';
import IPostEntity from '../../../../domain/entity/post/interface';
import { StoreType } from '../../../module/redux/store';

type questionPostType = {
  answers: IPostEntity[];
  detail: IPostEntity;
};

const useQuestion = (): questionPostType => {
  const post = useSelector((state: StoreType) => {
    return {
      answers: state.PostReducer.answer,
      detail: state.PostReducer.detailPost,
    };
  });
  return post;
};

export default useQuestion;
