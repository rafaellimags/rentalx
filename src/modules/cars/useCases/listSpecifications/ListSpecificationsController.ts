import { Request, Response } from "express";

import { Specification } from "../../model/Specification";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const specList: Specification[] = this.listSpecificationsUseCase.execute();
    return response.json(specList).status(200);
  }
}

export { ListSpecificationsController };
