import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository: SpecificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase: CreateSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController: CreateSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
