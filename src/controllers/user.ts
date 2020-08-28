import { AppDependencies } from "src/app-dependencies";
import Express from 'express';

export async function getUsersList(req: Express.Request, res: Express.Response, deps: AppDependencies) {
  res.json({
    list: await deps.userService.getList()
  })
}