export const GET_USER = 'USER/GET_USERS' as const;
export interface IGetUser {
  type: typeof GET_USER;
}
export type IUserAction = IGetUser;
