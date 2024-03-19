import mongoose from 'mongoose'
import validator from 'validator'   // email validation

const reservationSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required: true,
        minLength:[3, " First name must contain atleast 3 characters "]
    },
    lastName : {
        type:String,
        required:true,
        minLength:[3, " Last name must contain atleast 3 characters "]
    },
    email : {
        type:String,
        required:true,
        validate:[validator.isEmail, "Please enter a valid email"]
    },
    phone : {
        type:String,
        required:true,
        minLength:[10, "Phone number must contain 10 characters"]
    },
    time : {
        type:String,
        required:true
    },
    date : {
        type:String
    }
})

// we cannot export a schema directly. So we have to make a model for the schema.

export const Reservation  = mongoose.model("Reservation", reservationSchema)