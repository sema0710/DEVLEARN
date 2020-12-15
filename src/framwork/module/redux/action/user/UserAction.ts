import { GET_USER, IGetUser } from './interface';

export const getUser = (): IGetUser => ({
  type: GET_USER,
});
