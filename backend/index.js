const express = require('express');
const cors = require('cors')
const rootRouter = require('./routes/index')
const PORT = 3000
const app = express()

app.use("/api/v1", rootRouter);
app.use(cors())
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`listening on port : ${PORT}`)
})
