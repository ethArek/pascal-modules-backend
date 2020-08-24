import { PascalModule } from "src/types/pascal-module";

export class PascalModuleRepository {
  constructor() {
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
