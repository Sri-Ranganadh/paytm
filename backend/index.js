const express = require('express');
const cors = require('cors')
const rootRouter = require('./routes/index')
const parse = require('body-parser')
const PORT = 3000
const app = express()

app.use("/api/v1", rootRouter);
app.use(cors())
//app.use(express.json())
app.use(parse)

app.listen(PORT,()=>{
    console.log(`listening on port : ${PORT}`)
})
