import express from "express"
import { addHymn, getHymns } from "../controller/HymnController.js";

const router = express.Router();

router.post('/', addHymn);
router.get('/', getHymns)

export default router