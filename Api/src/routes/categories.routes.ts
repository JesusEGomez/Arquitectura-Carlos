import { Router } from "express";
import { createCategory } from "../handlers/categories/createCategory.handler";
import { getAllCategories } from "../handlers/categories/getAllCatergories.handler";

const categoriesRouter = Router();

categoriesRouter.post("/", createCategory);
categoriesRouter.get("/", getAllCategories);

export default categoriesRouter;
