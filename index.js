const express = require('express');

const app = express();

const port = 66;

app.listen(port, (error)=>{
    if(error){
        return console.error(error);
    };
    console.log('server listening on port',port);
});