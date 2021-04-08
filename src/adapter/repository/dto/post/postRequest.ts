export type setPostRequest = {
  title: string;
  tags: string[];
  content: string;
};

export type setAnswerRequest = {
  postid: number;
  title: string;
  content: string;
};

export type deletePostRequest = {
  postId: number;
};
