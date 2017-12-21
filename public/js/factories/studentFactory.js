studentApp.factory("studentFactory", ($http, $q)=>{
    var obj = {
        getJSON:function(){
        JSONurl = configobject.url;
        var defferedObj = $q.defer();
        $http.get(JSONurl).then((data)=>{
            defferedObj.resolve(data);
            },(err)=>{
            defferedObj.reject(err);
            });
         return defferedObj.promise;
        }
    }
    return obj;
});
