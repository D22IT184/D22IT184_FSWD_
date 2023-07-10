const fs = require('fs')

fs.readFile('./myData.txt','utf-8',(err,data)=>{
  if(err){
    console.assert(err)
  }

  console.log(data)
})