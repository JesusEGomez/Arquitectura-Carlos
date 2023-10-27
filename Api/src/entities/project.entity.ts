import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Photo } from "./photo.entity";
import { Category } from "./category.entity";
@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Photo, (photo) => photo.project)
  photo: Photo[];

  @ManyToOne(() => Category)
  category: Category;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}
