import IPostEntity, { IContent } from './interface/IPostEntity';

class PostEntity implements IPostEntity {
  constructor(
    title: string,
    description: string,
    tags: string[],
    content: IContent[],
    isResolved: boolean,
  ) {
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.isResolved = isResolved;
    this.content = content;
  }
  title: string;
  description: string;
  tags: string[];
  isResolved: boolean;
  content: IContent[];
}

export default PostEntity;
