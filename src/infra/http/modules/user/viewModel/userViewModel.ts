import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp({ createdAt, name, email, id }: User) {
    return {
      createdAt,
      name,
      email,
      id,
    };
  }
}
