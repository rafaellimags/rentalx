import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoriesRepository: CategoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase: ListCategoriesUseCase = new ListCategoriesUseCase(listCategoriesRepository);
const listCategoriesController: ListCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
