const express = require("express")


const app = express();


//load config from env file

require("dotenv").config();

const Port= process.env.PORT || 4000
//middleware to parse json request body

app.use(express.json())

//add the todo API routes

const todoRoutes = require("./routers/todo");

app.use("/api/v1",todoRoutes)


//start server

app.listen(Port,()=>{
    console.log(`Server is Started at ${Port}`);
    
})

//connect to the data Base

const dbConnect = require("./config/database")
dbConnect();

//default Route-->it is not required it is depend on u want to see on screen somthing
app.get("/", (req,res) =>{
    res.send("<h1>This is HomeLander Baby</h1>")
})