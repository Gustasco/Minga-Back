import controller from "../controllers/chapter.controllers.js";
import { schema, updateChapter } from "../schemas/chapter.schema.js";
import validator from "../middlewares/validator.js";
const { create, get_pages, get_chapters, update, destroy } = controller;
import express from "express";
import orderExists from "../middlewares/chapterExist.js";
let router = express.Router();
import { isComicAuthor } from "../middlewares/isComicAuthor.js";
import isAuthor from "../middlewares/isAuthor.js";

router.post("/", validator(schema), orderExists, create);
router.get("/:id", get_pages);
router.get("/", get_chapters);
router.put("/:id", validator(updateChapter), isAuthor, isComicAuthor, update);
router.delete("/:id", isAuthor, isComicAuthor, destroy);

export default router;
