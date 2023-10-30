import { Router } from "express";
import { createCategory } from "../handlers/categories/createCategory.handler";

const categoriesRouter = Router();

categoriesRouter.post("/", createCategory);
categoriesRouter.get("/");

export default categoriesRouter;
