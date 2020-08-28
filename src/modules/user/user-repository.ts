import { User } from "src/types/user";
import { DbService } from "../database/db-service";

export class UserRepository {
  constructor(
    private dbService: DbService
  ) {}

  async create(data: Omit<User, "id">) {
    // return this.dbService.connection
  }

  async update(id: string, data: Pick<User, "username">) {
  }

  async get(id: string) {
  }

  async getList(query: any) {
    return this
      .dbService
      .connection
      .select('*')
      .from('users');
  }
}
