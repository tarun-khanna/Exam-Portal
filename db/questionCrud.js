const questionSchema = require("./questionSchema");

const questionOperations = {
    addQuestion(questionList, response){
        questionSchema.collection.drop();
        questionList.forEach(function(question) {
            questionSchema.create(question);
        }, this);
    },
    getQuestions(response){
        questionSchema.find(function(error,docs){
                if(error){
                    response.send("Can't Fetch Product Some Problem in DB Side...");
                    return ;
                }
                if(docs.length>0){
                  response.json(docs);
                }
                else{
                    response.send("Invalid Userid or Password");
                }
        });
    }
    
}

module.exports = questionOperations;