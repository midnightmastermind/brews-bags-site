import express from "express";

import { getUser, setUser } from "../controller/user.js";

const router = express.Router();

//get info
// GET request for one user.
router.get('/:id', getUser);
router.put('/:id', putUser);

// router.post("/signIn", signIn);

export default router;
