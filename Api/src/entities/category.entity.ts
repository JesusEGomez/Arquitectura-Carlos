import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Project } from "./project.entity";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  category: string;
  @OneToMany(() => Project, (project) => project.category)
  project: Project[];
}
