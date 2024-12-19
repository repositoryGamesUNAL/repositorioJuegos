import { Router } from "express";
import { getPing } from "../middlewares/pingMiddleware"

const router = Router();

router.get("/ping", getPing);

export default router;