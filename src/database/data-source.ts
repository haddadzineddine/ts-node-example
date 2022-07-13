import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: `./database.sqlite`,
  entities: [User],
  logging: true,
  synchronize: true,
};
export const dataSource = new DataSource(config);
