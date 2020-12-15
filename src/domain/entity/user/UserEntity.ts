import IUserEntity from './interface';

class UserEntity implements IUserEntity {
  userName: string;
  img: string;
  description: string;
  id: number;
  constructor(userName: string, img: string, description: string, id: number) {
    this.userName = userName;
    this.img = img;
    this.description = description;
    this.id = id;
  }
}

export default UserEntity;
