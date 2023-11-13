import { Router } from "express";
import projectsRoutes from "./projects.routes";
import categoriesRouter from "./categories.routes";
import messagesRouter from "./messages.routes";

const router = Router();

router.use("/project", projectsRoutes);
router.use("/category", categoriesRouter);
router.use("/message", messagesRouter);

export default router;
