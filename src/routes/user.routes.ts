import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { Container } from "typedi";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  Container.get(UserController).all(res);
});

router.post("/", (req: Request, res: Response) => {
  Container.get(UserController).create(req, res);
});

export default router;
