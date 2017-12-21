const connection = require("./connection");

var Schema = connection.Schema;

var quesSchema = new Schema({id:Number, name:String, option1:String, option2:String, option3:String, 
                            option4:String, answer:String, mark:Boolean});
var quesModel = connection.model("myquestions", quesSchema);

module.exports = quesModel;

