import express from "express";
import { edit,watch, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;