studentApp.controller("studentController", ($scope, studentFactory)=>{
    var promise = studentFactory.getJSON();
    promise.then((data)=>{
        $scope.result=data.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
});