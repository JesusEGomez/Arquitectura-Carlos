import { Router } from "express";
import projectsRoutes from "./projects.routes";
import categoriesRouter from "./categories.routes";

const router = Router();

router.use("/project", projectsRoutes);
router.use("/category", categoriesRouter);

export default router;
