import { AppDependencies } from "src/app-dependencies";
import express from 'express';

export async function getUsersList(req: express.Request, res: express.Response, next: express.NextFunction, deps: AppDependencies) {
  try {
    const list = await deps.userService.getList();
    res.json({
      list
    });
  } catch (err) {
    next(err);
  }
}
