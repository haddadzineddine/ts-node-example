import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/product.controller";
import { Container } from "typedi";
const router = Router();

router.get("/", (req: Request, res: Response) => { 
  Container.get(ProductController).all(res);
});

router.post("/", (req: Request, res: Response) => {
  Container.get(ProductController).create(req, res);
});

export default router;
