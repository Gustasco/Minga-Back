import controller from "../controllers/company.controller.js";
import Schema from "../schemas/company.schema.js";
import express from "express";
import validator from "../middlewares/validator.js";
import isCompany from "../middlewares/isCompany.js";

const router = express.Router();

const { update, get_company, create } = controller;

router.get("/:id", get_company);
router.post("/", create);
router.put("/:me", validator(Schema), isCompany, update);

export default router;
