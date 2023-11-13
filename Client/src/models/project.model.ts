import { ICategory, IPhoto } from ".";

export interface IProject {
  id: number;
  title: string;
  description: string;
  createAt: string;
  updatedAd: string;
  photo: IPhoto[];
  category: ICategory;
}
