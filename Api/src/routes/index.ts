import { Router } from "express";
import projectsRoutes from "./projects.routes";
import categoriesRouter from "./categories.routes";

const router = Router();

router.use("/projects", projectsRoutes);
router.use("/categories", categoriesRouter);

export default router;
