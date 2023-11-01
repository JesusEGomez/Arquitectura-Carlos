import { Router } from "express";
import { getAllProjects } from "../handlers/projects/getAllProjects.handler";
import { createProject } from "../handlers/projects/createProject.handler";
import { getProjectById } from "../handlers/projects/getProjectById.handler";

const projectsRoutes = Router();

projectsRoutes.post("/", createProject);
projectsRoutes.get("/", getAllProjects);
projectsRoutes.get("/:id", getProjectById);

export default projectsRoutes;
