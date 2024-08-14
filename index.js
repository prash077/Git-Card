const express = require('express');
const path = require('path');
const fs = require('fs');

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    fs.readdir(`./files`,function(err,files){
        res.render("index.ejs");
    })
})

app.listen(port,()=>{
    console.log(`listening on port 3000 - localhost:${port}`);
});