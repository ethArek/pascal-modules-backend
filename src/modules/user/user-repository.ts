import { User } from "src/types/user";

export class UserRepository {
  constructor() {
  }

  async create(data: Omit<User, "id">) {
  }

  async update(id: string, data: Pick<User, "username">) {
  }

  async get(id: string) {
  }

  async getList(query: any) {
  }
}
