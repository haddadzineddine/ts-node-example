import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { Product } from "../entities/product.entity";

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: "src/database/database.sqlite",
  entities: [User, Product],
  logging: true,
  synchronize: true,
  migrations: ["src/database/migrations/*.ts"],
};

const dataSource = async (): Promise<DataSource> =>
  await new DataSource(config).initialize();

export default dataSource;
