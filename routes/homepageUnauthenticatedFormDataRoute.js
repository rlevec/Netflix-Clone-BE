import express from "express";
import { homepageUnauthenticatedFormData } from "../data/homepageUnauthenticatedFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(homepageUnauthenticatedFormData);
})

export default router