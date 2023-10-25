import express from "express";
import {signUpFormData} from "../data/signUpFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(signUpFormData);
})

export default router