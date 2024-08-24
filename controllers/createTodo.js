//import

const Todo = require("../models/todo") 

//define route handler

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from body
            const {title,description} = req.body
            //create a new todo and insert into DB
            const response = await Todo.create
            ({title,description});
            //send a json response with success flag
            res.status(200).json({
                success:true,
                data:response,
                message:'Entry Created Successfully'
            })   
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:'Internal Server error',
            message:err.message
        })
        
        

    }
}