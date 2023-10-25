import express from "express";
import {accountFormData} from "../data/accountFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(accountFormData);
})

export default router