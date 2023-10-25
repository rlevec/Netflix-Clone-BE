import express from "express";
import { watchableContent } from "../data/watchableContentFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(watchableContent);
})

export default router