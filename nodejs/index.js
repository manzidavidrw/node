const express = require('express')
const routes = require("./routes") 
const mongoose = require('mongoose')


mongoose
.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
.then(() =>{

  const app = express();
  app.use(express.json())
  app.use("/api",routes)

  
   app.listen(3000, ()  => {
     console.log("server started")
   })

})

