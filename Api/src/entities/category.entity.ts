import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Project } from "./project.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  category: string;
  @OneToMany(() => Project, (project) => project.category)
  project: Project[];
}
