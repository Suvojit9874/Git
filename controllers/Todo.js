const Todo=require('../models/Todo');
const schedule = require('node-schedule');

exports.createTodo=async(req,res)=>{
    try {
        const {title,description}=req.body;
        const createdTodo= await Todo.create( {title,description})
        res.status(200).json({
            success:true,
            data:createdTodo
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"nehi hora kya"
        })
    }
} 

exports.deleteTodo=async(req,res)=>{
    try {
        schedule.scheduleJob({minute : 5}, async () => {
        
            const dltTodo= await Todo.deleteOne({_id:req.params._id})
            res.status(200).json({
                success:true,
                data:dltTodo
            })
           });  
         
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"nehi hora kya",
            error:error.message
        })
    }
}
