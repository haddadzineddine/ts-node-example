import { Service } from "typedi";

@Service()
export class ProductService {
  public all() {
    return "all products from service !";
  }
}
