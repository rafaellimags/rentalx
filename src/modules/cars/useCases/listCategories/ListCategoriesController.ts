import { Request, Response } from "express";

import { Category } from "../../model/Category";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const categoriesList: Category[] = this.listCategoriesUseCase.execute();
    return response.json(categoriesList).status(200);
  }
}

export { ListCategoriesController };
