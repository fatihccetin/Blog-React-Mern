import express from "express";
import {getPosts} from "../controllers/posts.js";

const router = express.Router();

//get post delete update


router.get("/", getPosts);
export default router;



