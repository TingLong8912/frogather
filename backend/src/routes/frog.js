import { Router } from "express";
import { getFrogs } from "./../controllers/frogs";

const router = Router();

/* ROUTER */
router.get("/", getFrogs);

export default router;
