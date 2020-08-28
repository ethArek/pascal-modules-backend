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
    return this.dbService.connection
      .select('*')
      .from('users')
      .where('id', id)
      .then(this.dbService.getFirstRow);
  }

  async getList(query: any) {
    return this.dbService.connection
      .select('*')
      .from('users');
  }
}
