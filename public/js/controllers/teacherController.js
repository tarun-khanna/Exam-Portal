teacherApp.controller("teacherController",($scope, teacherFactory)=>{
    console.log("hi");
    $scope.questionid=teacherFactory.getId();
    printId=function(){
        $scope.questionid=teacherFactory.getId();    
    }
    resetall=function(){
        $scope.name="";
        $scope.option1="";
        $scope.option2="";
        $scope.option3="";
        $scope.option4="";
        $scope.answer="";
    }
    $scope.addques=function(){
        teacherFactory.add($scope.questionid, $scope.name, $scope.option1, $scope.option2, 
        $scope.option3, $scope.option4, $scope.answer);    
        printQuestions();    
        printId();
        resetall();
    }
    printQuestions=function(){
        $scope.questions=teacherFactory.getQuestionList();
        console.log($scope.questions);
    }
    $scope.editques=function(event)
    {
        var row = event.srcElement.parentNode.parentNode;
        row.classList="blueRow";
        var id = row.id;
        $scope.questionid=id;
        var index=teacherFactory.searchById(id);        
        var questionList=teacherFactory.getQuestionList();
        var questionObject=questionList[index];
        $scope.name=questionObject.name;
        $scope.option1=questionObject.option1;
        $scope.option2=questionObject.option2;
        $scope.option3=questionObject.option3;
        $scope.option4=questionObject.option4;
        $scope.answer=questionObject.answer;
    }
    $scope.markques=function(event){
        var row = event.srcElement.parentNode.parentNode;
        row.classList.toggle("redRow");
        var id = row.id;
        teacherFactory.markDelFn(id);
    }
    $scope.delques=function(){
        teacherFactory.del();
        printQuestions();
        printId();
    }
    $scope.updateques=function(){
        var id=$scope.questionid;

        var questionList=teacherFactory.getQuestionList();
        var index=teacherFactory.searchById(id);
        var questionObject=questionList[index];
        questionObject.name=$scope.name;
        questionObject.option1=$scope.option1;
        questionObject.option2=$scope.option2;
        questionObject.option3=$scope.option3;
        questionObject.option4=$scope.option4;
        questionObject.answer=$scope.answer;
        printQuestions();    
        printId();
        resetall();
    }
    $scope.savelocalques=function(){
        if(window.localStorage)
        {
            var json = JSON.stringify(teacherFactory.getQuestionList());
            localStorage.questionlist = json;
            alert("data stored......")
        }
        else
        {
            alert("your browser doesn't support local storage");
        }
        
    }
    $scope.fetchlocalques=function(){
        if(window.localStorage)
            {
                if(localStorage.questionlist)
                {
                    teacherFactory.questionList = JSON.parse(localStorage.questionlist);
                    printQuestions();    
                    printId();
                    resetall();
                }
                else
                {
                    alert("no records exist");
                }
            }
        else
            {
                alert("your browser doesn't support local storage");
            }
    }
    $scope.submit=function(){
        $scope.fetchlocalques();
        teacherFactory.submitSavedQues();
    }
});