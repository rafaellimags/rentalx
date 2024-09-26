import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository: CategoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase: CreateCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController: CreateCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController, createCategoryUseCase };
