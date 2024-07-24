const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');
const adminRoute = require('./routes/adminData')
const cors = require('cors')


const app = express()
const port = 3001;
app.use(express.json());
app.use(cors())
app.use('/',adminRoute)

app.listen(port,async()=>{
    await connectDB(process.env.MONGO_URL)
    console.log(`Server Started at port ${port}`)
})