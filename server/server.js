const path =  require('path');
const express = require('express');
const app = express()
const publicpath = path.join(__dirname,'..','public')
const PORT = process.env.PORT || 3000

app.use(express.static(publicpath))

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicpath,'index.html'))
})

app.listen(PORT,()=>{
    console.log(`The server is up and runing at port ${PORT}`);
})