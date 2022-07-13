import { Inject, Service } from "typedi";
import { ProductService } from "../services/product.service";

@Service()
export class ProductController {
  constructor(private productService: ProductService) {}

  public all() {
    return this.productService.all();
  }
}
