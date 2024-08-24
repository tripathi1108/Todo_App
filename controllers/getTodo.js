
const Todo = require("../models/todo") 


//define route handler



exports.getTodo = async(req,res)=>{
    try{
       //fetch all todo item from dataBase
       const todos = await Todo.find({})

       //response
       res.status(200).json({
        success:true,
        data:todos,
        message:'Entire Todo Data is Fetched'
    })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })
        
    }
}




exports.getTodoById = async(req,res)=>{
    try{
     //extract basis on id
     const id = req.params.id;
     const todo = await Todo.findById({_id: id})

     //data for given id not found
     if(!todo){
        res.status(404).json({
            success:false,
            message:'No Data Found with Given Id'
        })
     }
     //data for given id found
     res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully f etched`
     })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })
    }
}