import { EntityTarget, Repository } from "typeorm";
import dataSource from "../database/data-source";

export class BaseService {
  protected async getRepository<T>(
    entity: EntityTarget<T>
  ): Promise<Repository<T>> {
    const connection = await dataSource();
    return connection.getRepository<T>(entity);
  }
}
