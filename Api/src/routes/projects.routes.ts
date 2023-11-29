import { Router } from "express";
import { getAllProjects } from "../handlers/projects/getAllProjects.handler";
import { createProject } from "../handlers/projects/createProject.handler";
import { getProjectById } from "../handlers/projects/getProjectById.handler";
import { deleteProject } from "../handlers/projects/deleteProject.handler";

const projectsRoutes = Router();

projectsRoutes.post("/", createProject);
projectsRoutes.get("/", getAllProjects);
projectsRoutes.get("/:id", getProjectById);
projectsRoutes.delete("/:id", deleteProject);

export default projectsRoutes;
