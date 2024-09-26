import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository: SpecificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase: ListSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository)
const listSpecificationsController: ListSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };
