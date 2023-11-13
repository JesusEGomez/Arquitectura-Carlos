import { DataSource } from "typeorm";
import { Project } from "./entities/project.entity";
import { Category } from "./entities/category.entity";
import { Photo } from "./entities/photo.entity";
import { Message } from "./entities/message.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "architecture",
  username: "postgres",
  password: "3435131231Omar",
  entities: [Project, Category, Photo, Message],
  logging: true,
  synchronize: true,
});
