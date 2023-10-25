import express from "express";
import {profileTransferFormData} from "../data/profileTransferFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(profileTransferFormData);
})

export default router