import express from "express";
const router = express.Router();
import schema from "../schemas/author.schema.js";
import validator from "../middlewares/validator.js";
import controller from "../controllers/author.controller.js";
import Schema from "../schemas/author.update.schema.js";
import isAuthor from "../middlewares/isAuthor.js";
const { create, update, get_author } = controller;

router.post("/", validator(schema), create);
router.put("/me", validator(Schema), isAuthor, update);

export default router;
