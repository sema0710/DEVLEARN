import UserEntity from '../../../../../../domain/entity/user';
import { IUserAction } from '../../../action/user/interface';

export type IUserState = UserEntity;
export interface IUserReducer {
  (state: IUserState, action: IUserAction): IUserState;
}
