const mongoose = require("mongoose")


const mongoDB = () => {
    mongoose.connect('mongodb+srv://foodzone:foodzone123@cluster0.w2ldkro.mongodb.net/?retryWrites=true&w=majority' , { useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log(" Mongo Connection open")
    // if(err) console.log("---",err)
       const fetched_data = mongoose.connection.db.collection("food_items");
       fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else console.log(data)
       })
        }
)
.catch(err => {
    console.log("OH no error")
    console.log(err)
    })
    
}

module.exports = mongoDB;

