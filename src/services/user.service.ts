import { Service } from "typedi";
import { CreateUserDto } from "../dtos/user/create-user.dto";
import { User } from "../entities/user.entity";
import { BaseService } from "./base.service";

@Service()
export class UserService extends BaseService {
  public async all(): Promise<User[]> {
    const userRepository = await this.getRepository<User>(User);
    return await userRepository.find();
  }

  public async find(id: number): Promise<User | null> {
    const userRepository = await this.getRepository<User>(User);
    return await userRepository.findOneBy({ id });
  }

  public async create(user: CreateUserDto): Promise<User> {
    const userRepository = await this.getRepository<User>(User);
    return await userRepository.save(user);
  }
}
