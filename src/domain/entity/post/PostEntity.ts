import IPostEntity from './interface/IPostEntity';

class PostEntity implements IPostEntity {
  constructor(title: string, description: string, tags: string[], isResolved: boolean) {
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.isResolved = isResolved;
  }
  title: string;
  description: string;
  tags: string[];
  isResolved: boolean;
}

export default PostEntity;
