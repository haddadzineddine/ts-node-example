import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/product.controller";
import { Container } from "typedi";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const productController = Container.get(ProductController);
  const result = productController.all();
  res.json(result);
});

export default router;
