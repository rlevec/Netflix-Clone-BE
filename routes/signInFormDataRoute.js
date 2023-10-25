import express from "express";
import {signInFormData} from "../data/signInFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(signInFormData);
})

export default router