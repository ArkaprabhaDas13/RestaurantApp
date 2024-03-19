import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {dbName:"Restaurant"}).then(()=>{
        console.log("DB Connected successfully !")
    }).catch((err)=>{
        console.log(`DB connection failed ${err}`)
    })
}
