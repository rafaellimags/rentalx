import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router: Router = Router();

// base path for cateroies routes
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
