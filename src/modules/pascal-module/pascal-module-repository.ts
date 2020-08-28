import { PascalModule } from "src/types/pascal-module";
import { DbService } from "../database/db-service";

export class PascalModuleRepository {
  constructor(
    private dbService: DbService
  ) {
  }

  async create(data: Omit<PascalModule, "id">) {
  }

  async update(id: string, data: Partial<PascalModule>) {
  }

  async get(id: string) {
  }

  async getList(query: any) {
  }
}
