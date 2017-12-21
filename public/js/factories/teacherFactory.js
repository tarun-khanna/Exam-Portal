teacherApp.factory("teacherFactory", ($http, $q)=>{
    var object={
        questionList:[],
        add(id, name, option1, option2, option3, option4, answer){
            var obj = new Question(id, name, option1, option2, option3, option4, answer);
            this.questionList.push(obj);
        },
        getQuestionList(){
            return this.questionList; 
        
        },
        getId(){
            return this.questionList.length + 1;
        },
        markDelFn(id){
            var index = this.searchById(id);
            var questionObject = this.questionList[index];
            this.toggleMark(questionObject);
        },
        toggleMark(questionObject){
            questionObject.mark=!questionObject.mark;
        },
        searchById(id)
        {
            var index = this.questionList.findIndex(function(questionObject){
                return questionObject.id == id;    
            });
            return index;        
        },
        reviseId()
        {
            var counter = 1;
            this.questionList.forEach(function(questionObject){
                questionObject.id = counter;
                ++counter;
            });
            //this.id = this.questionList.length+1;
        },
        del()
        {
            this.questionList = this.questionList.filter(function(questionObject){
                return questionObject.mark == false;
            });
            console.log("inside del-----",this.questionList);
            this.reviseId();
        },
        submitSavedQues()
        {
            console.log("Trying to send to server");
            $http.post("/addQuestions",this.questionList);
            console.log("after calling server...");
        }

    };
    return object;
});