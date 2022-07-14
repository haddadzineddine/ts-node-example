import { Service } from "typedi";
import { CreateProductDto } from "../dtos/product/create-product.dto";
import { Product } from "../entities/product.entity";
import { BaseService } from "./base.service";

@Service()
export class ProductService extends BaseService {
  public async all(): Promise<Product[]> {
    const productRepository = await this.getRepository<Product>(Product);
    return await productRepository.find();
  }

  public async find(id: number): Promise<Product | null> {
    const productRepository = await this.getRepository<Product>(Product);
    return await productRepository.findOneBy({ id });
  }

  public async create(product: CreateProductDto): Promise<Product> {
    const productRepository = await this.getRepository<Product>(Product);
    return await productRepository.save(product);
  }
}
