const fs = require('fs');

function readmyfile(filename)
{
    var filecontent = "";
    fs.readFile(filename,'utf-8', function(err,data){
        if(err)
            filecontent = "There is error"+err;
        else
        {
            console.log(data);
            filecontent =  data;
        }
    
    });
    return filecontent;
}

module.exports.readfile = readmyfile;