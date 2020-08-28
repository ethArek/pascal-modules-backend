import { AppDependencies } from "src/app-dependencies";
import express from 'express';

export async function getUsersList(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      list: await deps.userService.getList()
    });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    res.json({
      data: await deps.userService.get(req.params.id)
    });
  } catch (err) {
    next(err);
  }
}
