const express=require('express');
const { createTodo, deleteTodo } = require('../controllers/Todo');
const router=express.Router()

router.post('/todo',createTodo);
router.delete('/todo/:_id',deleteTodo);

module.exports=router