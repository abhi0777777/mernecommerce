require("dotenv").config()
const mongoose = require('mongoose')
const express = require("express")
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const cors = require('cors')
const path = require('path')

const app = express()
console.log(process.env.DB_PASSWORD)

// db connections
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log("databse Connected")
}


// Body parser
app.use(cors())
app.use(express.static(path.resolve(process.env.PUBLIC_DIR)));
app.use(express.json());
app.use('/users',userRouter.router);
app.use('/products',productRouter.router);
// 
app.use("*",(req,res)=>{
  res.sendfile(path.resolve(__dirname,'build','index.html'))
})


app.listen(process.env.PORT,()=>{
    console.log("Server is working")
});