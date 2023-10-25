import express from "express";
import {forgotEmailPasswordFormData} from "../data/forgotEmailPasswordFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(forgotEmailPasswordFormData);
})

export default router