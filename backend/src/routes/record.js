import { Router } from "express";
import { createReocrd, getRecords } from "./../controllers/record";

const router = Router();

/* ROUTER */
router.post("/", createReocrd);
router.get("/", getRecords);

export default router;
