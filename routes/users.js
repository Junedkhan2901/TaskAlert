import express, { request } from "express";
import { CreateUser, getUser, getUserbyId, UserbyId, UpdateUserbyID } from "../Controllers/users.js";
import { checkDatabase } from "../Controllers/auth.js";

const router = express.Router();

let users = []

router.get('/checkdb', checkDatabase);
//get all user
router.get('/', getUser);

//add user id   
router.post('/', CreateUser);

//get user details by user id
router.get('/:id', getUserbyId);

//delete by id 
router.delete('/:id', UserbyId)

//update by id 
router.post('/:id', UpdateUserbyID);


export default router;  