const mongoose = require("mongoose")

const DBConnection = ()=>{
    const uri =  "mongodb+srv://jalay:jalay@cluster0.bpaleac.mongodb.net/exp"

   

    mongoose.connect(uri).then(()=>{
        console.log("database connected..")
    }).catch((err)=>{
        console.log("error while connecting db..",err)
    })

}

module.exports = DBConnection