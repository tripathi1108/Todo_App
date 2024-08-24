const mongoose = require('mongoose')

require("dotenv").config();

const dbConnect = () =>{
mongoose.connect(process.env.DATABASE_URL,{
    //in the latest version don't use it there is no need for this  2 statment
    // useNewUrlParser :true,
    // useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connection is successfull");
    
})
.catch((error)=>{
    console.log("Retry to Connect with DataBase"); 
    console.error(error.message);
    //process.exit: A method that ends the Node.js process. It can be used to exit the program with a specific exit code.
//1: The exit code passed to process.exit. In most operating systems, an exit code of 0 indicates that the program completed successfully, while any non-zero code (like 1) indicates that an error occurred.
    process.exit(1)
})
}
module.exports = dbConnect