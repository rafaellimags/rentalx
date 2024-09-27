import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specification: Specification = this.specificationRepository.findByName(name);

    if (specification) {
      throw new Error("Specification already exists");
    }

    // Create a DTO from request data
    const specificationDTO: ICreateSpecificationDTO = { name, description };

    this.specificationRepository.create(specificationDTO);
  }
}

export { CreateSpecificationUseCase };
