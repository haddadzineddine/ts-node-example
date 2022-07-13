import dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    port: process.env.APP_PORT || 3000,
  },
  database: {
    type: process.env.DATABASE_TYPE || "postgres",
    host: process.env.DB_HOST ?? "localhost",
    port: process.env.DB_PORT ?? 3306,
    username: process.env.DB_USERNAME ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "test",
  },
};

// at this level we'll just connect to sqlite , so we don't need all of database config
// i add this just for future proof ; use drivers to connect to different databases ( abstracted )

export default config;
