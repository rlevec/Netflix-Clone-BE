import express from "express";
import {profilesFormData} from "../data/profilesFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(profilesFormData);
})

export default router