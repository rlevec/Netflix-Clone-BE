import express from "express";
import {footerFormData} from "../data/footerFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(footerFormData);
})

export default router