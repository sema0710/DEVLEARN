export type postDto = {
  id: number;
  writerId: string;
  title: string;
  content: string;
  isSolved: boolean;
  tags: string[];
  answers: answerDto[];
};

export type answerDto = {
  id: number;
  postId: number;
  writerId: string;
  title: string;
  content: string;
  isSolved: boolean;
};
