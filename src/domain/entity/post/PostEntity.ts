import IPostEntity from './interface/IPostEntity';

class PostEntity implements IPostEntity {
  constructor(title: string, description: string, tags: string[]) {
    this.title = title;
    this.description = description;
    this.tags = tags;
  }
  title: string;
  description: string;
  tags: string[];
}

export default PostEntity;
