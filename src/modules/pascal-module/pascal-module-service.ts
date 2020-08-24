import { PascalModuleRepository } from "./pascal-module-repository";
import { PascalModule } from "../../types/pascal-module";

export class PascalModuleService {
  constructor(
    private pascalModuleRepository: PascalModuleRepository,
  ) {
  }

  create(requestBody: Omit<PascalModule, "id">) {
    return this.pascalModuleRepository.create(requestBody);
  }

  update(id: string, requestBody: Partial<PascalModule>) {
    return this.pascalModuleRepository.update(id, requestBody);
  }

  get(id: string) {
    return this.pascalModuleRepository.get(id);
  }

  getList() {
  }
}
