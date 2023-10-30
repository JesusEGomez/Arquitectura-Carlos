import { Router } from "express";
import { getAllProjects } from "../handlers/projects/getAllProjects.handler";
import { createProject } from "../handlers/projects/createProject.handler";

const projectsRoutes = Router();

projectsRoutes.post("/", createProject);
projectsRoutes.get("/", getAllProjects);
projectsRoutes.get("/:id", (req, res) => {
  const id = req.params;
  res.json(id);
});

export default projectsRoutes;
