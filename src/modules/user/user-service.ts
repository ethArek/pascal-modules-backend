import { UserRepository } from "./user-repository";
import { User } from "../../types/user";

export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {
  }

  create(requestBody: Omit<User, "id">) {
    return this.userRepository.create(requestBody);
  }

  update(id: string, requestBody: Pick<User, "username">) {
    return this.userRepository.update(id, requestBody);
  }

  get(id: string) {
    return this.userRepository.get(id);
  }

  getList() {
    return this.userRepository.getList({});
  }
}
