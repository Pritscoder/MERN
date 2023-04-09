const mongo = require("mongoose");
mongo.connect("mongodb://mongodb:27017/cms",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}    
).then(()=>{console.log(" database connected")}).catch((err)=>{console.log(err)})