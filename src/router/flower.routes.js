import { Router } from "express";
import {
  flowerGet,
  flowercreate,
  flowerdelete,
} from "../controller/flowers.controller.js";
import { uploads } from "../utils/multer.conf.js";

const flower = Router();

flower.get("/flower", flowerGet);
flower.post("/flower/create", uploads.single("image"), flowercreate);
flower.delete("/flower/delete/:flowers_id", flowerdelete);

export default flower;
