const express = require ("express");
const bodyParser= require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
})

app.post("/",function(request,response){
    var number1= parseFloat(request.body.weight);
    var number2= parseFloat(request.body.height);
    var result = parseFloat(number1 / number2^2);        // parseFloat which is used to get the  decimal value ..
        response.send("The BMI is " + result);

})



app.listen(3000,function(request,response){
    console.log("This server is in active");
})