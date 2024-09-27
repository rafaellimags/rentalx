import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository: CategoriesRepository = CategoriesRepository.getInstance();
const importCategoriesUseCase: ImportcategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController: ImportCategoryController = new ImportCategoryController(importCategoriesUseCase);

export { importCategoryController };
