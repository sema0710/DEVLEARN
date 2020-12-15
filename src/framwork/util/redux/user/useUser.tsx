import { useSelector } from 'react-redux';
import { IUserState } from 'src/framwork/module/redux/reducer/user/interface';
import { StoreType } from 'src/framwork/module/redux/store';

const useUser = (): IUserState => {
  return useSelector((state: StoreType) => state.UserReducer);
};

export default useUser;
