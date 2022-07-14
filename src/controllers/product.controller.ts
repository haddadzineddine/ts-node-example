import { Request, Response } from "express";
import { Service } from "typedi";
import { ProductService } from "../services/product.service";
import { CreateProductDto } from "../dtos/product/create-product.dto";

@Service()
export class ProductController {
  constructor(private productService: ProductService) {}

  public async all(res: Response) {
    const result = await this.productService.all();
    res.json(result);
  }

  public async create(req: Request, res: Response) {
    const product = req.body as CreateProductDto;
    const result = await this.productService.create(product);
    res.status(201).json(result);
  }
}
