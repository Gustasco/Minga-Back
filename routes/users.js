import express from "express";
let router = express.Router();
import schema from "../schemas/signup.schema.js";
import validator from "../middlewares/validator.js";
import accountExistsSignUp from "../middlewares/accountExistsSignUp.js";
import accountExistsSignIn from "../middlewares/accountExistsSignIn.js";
import accountHasBeenVerified from "./../middlewares/accountHasBeenVerified.js";
import mustSignIn from "../middlewares/mustSignIn.js";
import controller from "../controllers/users.controller.js";
const { signup, signin, signintoken, signout, read, verify } = controller;

router.post("/signup", accountExistsSignUp, validator(schema), signup);
router.post("/signin", accountExistsSignIn, accountHasBeenVerified, signin);
router.post("/token", mustSignIn, signintoken);
router.put("/signout", signout);
router.put("/verify/:verify_code", verify);
router.get("/", read);

export default router;
