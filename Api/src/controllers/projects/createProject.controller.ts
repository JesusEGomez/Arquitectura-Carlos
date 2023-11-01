import { Category } from "../../entities/category.entity";
import { Photo } from "../../entities/photo.entity";
import { Project } from "../../entities/project.entity";

export const createProjectDB = async (
  title: string,
  description: string,
  photos: Photo[],
  category: Category
) => {
  const project = new Project();
  project.title = title;
  project.description = description;
  project.category = category;
  await project.save();

  photos.forEach((p) => {
    const photo = new Photo();
    photo.project = project;
    photo.url = p.url;
    photo.save();
  });

  return project;
};
