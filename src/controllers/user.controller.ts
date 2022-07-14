import { Request, Response } from "express";
import { Service } from "typedi";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dtos/user/create-user.dto";

@Service()
export class UserController {
  constructor(private userService: UserService) {}

  public async all(res: Response) {
    const result = await this.userService.all();
    res.json(result);
  }

  public async create(req: Request, res: Response) {
    const user = req.body as CreateUserDto;
    const result = await this.userService.create(user);
    res.status(201).json(result);
  }
}
