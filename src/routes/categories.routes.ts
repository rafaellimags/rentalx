import { Router } from "express";

import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoryRepository";

const categoriesRoutes: Router = Router();
const categoriesRepository: CategoriesRepository = new CategoriesRepository();
// const categoriesRepository: PostgresCategoriesRepository = new PostgresCategoriesRepository();

// Relative path after base path defined in server.
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  // Pass an instance of CategoriesRepository so the service can use its methods to run CRUD operations,
  // removing this reponsibility from the route.
  const createCategoryService: CreateCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categoriesList: Category[] = categoriesRepository.list();
  return response.json(categoriesList).status(200);
});

export { categoriesRoutes };
