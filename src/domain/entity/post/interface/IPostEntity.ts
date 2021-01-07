export interface IContent {
  type: string;
  content: string | string[];
}

interface IPostEntity {
  title: string;
  description: string;
  tags: string[];
  isResolved: boolean;
  content: IContent[];
}

export default IPostEntity;
