import { DataSource } from "typeorm";
import { Project } from "./entities/project.entity";
import { Category } from "./entities/category.entity";
import { Photo } from "./entities/photo.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "architecture",
  username: "postgres",
  password: "3435131231Omar",
  entities: [Project, Category, Photo],
  logging: true,
  synchronize: true,
});
