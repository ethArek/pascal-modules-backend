import { DbService } from "./modules/database/db-service";
import { UserService } from "./modules/user/user-service";
import { PascalModuleService } from "./modules/pascal-module/pascal-module-service";
import { UserRepository } from "./modules/user/user-repository";
import { PascalModuleRepository } from "./modules/pascal-module/pascal-module-repository";

export interface AppDependencies {
  userService: UserService,
  pascalModuleService: PascalModuleService
}

export function initAppDependencies (): AppDependencies {
  const dbService = new DbService();

  const userRepository = new UserRepository(dbService);
  const userService = new UserService(userRepository);
  
  const pascalModuleRepository = new PascalModuleRepository(dbService);
  const pascalModuleService = new PascalModuleService(pascalModuleRepository);

  return {
    userService,
    pascalModuleService
  }
}