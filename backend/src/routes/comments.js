import { Router } from "express";
import { createRecordComment, getRecordComments, addCommentLikes } from "./../controllers/recordComments";

const router = Router();

/* ROUTER */
router.post("/addComment", createRecordComment);
router.post("/addLikes", addCommentLikes);
router.get("/", getRecordComments);

export default router;
