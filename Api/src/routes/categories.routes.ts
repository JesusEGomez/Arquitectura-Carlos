import { Router } from "express";
import { createCategory } from "../handlers/categories/createCategory.handler";
import { getAllCategories } from "../handlers/categories/getAllCategories.handler";
import { getProjectByCategory } from "../handlers/categories/getProjectByCategory.handler";

const categoriesRouter = Router();

categoriesRouter.post("/", createCategory);
categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:category", getProjectByCategory);

export default categoriesRouter;
