import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes: Router = Router();
const specificationsRepository: SpecificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService: CreateSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});
export { specificationsRoutes };
