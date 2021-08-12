import express from "express";
import {getPosts} from "../controllers/post";

const router = express.Router();

//get post delete update


router.get("/", getPosts);
export default router;



