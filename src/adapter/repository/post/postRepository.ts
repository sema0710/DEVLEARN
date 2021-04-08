import getApiRequest from '../../infrastructor/api';
import {
  getAllPostResponseType,
  getMyPostResponseType,
  getPostDetailResponseType,
} from '../dto/post/postResponse';
import { deletePostRequest, setAnswerRequest } from '../dto/post/postRequest';

const request = getApiRequest();

export const getPostDetail = async (): Promise<getPostDetailResponseType> => {
  try {
    const { data } = await request.get<getPostDetailResponseType>('/post/my');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyPost = async (id: number): Promise<getMyPostResponseType> => {
  try {
    const { data } = await request.get<getMyPostResponseType>(`/post/detail?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async (): Promise<getAllPostResponseType> => {
  try {
    const { data } = await request.get<getAllPostResponseType>('/post');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setAnswer = async (data: setAnswerRequest): Promise<void> => {
  try {
    await request.post('/post', data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (data: deletePostRequest): Promise<void> => {
  try {
    await request.delete('/post', {
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
