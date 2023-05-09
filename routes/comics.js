import controller from "../controllers/comics.controller.js";
const { create, my_comics, update, delete_comic, carousel } = controller;
import schema from "../schemas/NewComic.js";
import validator from "../middlewares/validator.js";
import isAuthorActive from "../middlewares/isAuthorActive.js";
import isAuthor from "../middlewares/isAuthor.js";
import titleExists from "../middlewares/titleCompare.js";
import controller_one from "../controllers/comic.one.controller.js";
const { get_comic } = controller_one;

import express from "express";
import all from "../controllers/comic.all.controller.js";
import isAuthorOrCompany from "../middlewares/isAuthorOrCompany.js";
import isComicCreator from "../middlewares/isComicCreator.js";

const { read } = all;
let router = express.Router();

router.get("/", read);
router.get("/carousel", carousel);
router.post(
  "/",
  validator(schema),
  isAuthor,
  isAuthorActive,
  titleExists,
  create
);
router.get("/me", isAuthorOrCompany, my_comics);
router.get("/:id", get_comic);
router.put(
  "/:id",
  validator(schema),
  isAuthorOrCompany,
  isComicCreator,
  update
);
router.delete("/:id", isAuthorOrCompany, isComicCreator, delete_comic);

export default router;
