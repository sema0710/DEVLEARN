import { getApiRequestWithoutToken } from 'src/adapter/infrastructor/api/api';
import { signinRequestType, signupRequestType } from '../dto/user/userRequest';
import { signinResponseType } from '../dto/user/userResponse';

const withoutTokenRequest = getApiRequestWithoutToken();

export const signin = async (data: signinRequestType): Promise<signinResponseType> => {
  try {
    const response = await withoutTokenRequest.post<signinResponseType>('/user/auth', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (data: signupRequestType): Promise<void> => {
  try {
    await withoutTokenRequest.post('/user', data);
  } catch (error) {
    if (error.response.status === 409) {
      alert('이미 존재하는 아이디입니다.');
    }
  }
};
