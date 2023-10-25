import express from "express";
import {browseFormData} from "../data/browseFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(browseFormData);
})

export default router