import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import appConfig from "./config/app.config";
import productRoutes from "./routes/product.routes";
import userRoutes from "./routes/user.routes";

const app: Express = express();
const { port } = appConfig;

app.use(express.json());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
);
