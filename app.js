const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const questionOperations = require("./db/questionCrud");


app.post("/addQuestions", (request, response)=>{
   var questionList = request.body;
   questionOperations.addQuestion(questionList, response);

});

app.get("/getQuestions", (request, response)=>{
    questionOperations.getQuestions(response);
});
app.listen(1234,()=>{
    console.log("server start");
})
