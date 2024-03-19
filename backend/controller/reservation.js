import ErrorHandler from "../error/error.js"
import {Reservation} from "../models/reservationSchema.js"

// sendReservation() is basically pushing new data into MONGO DB - Its just a CRUD operation which is called from reservationRouter

export const sendReservation = async (req, res, next)=>{
    const {firstName, lastName, email, phone, time, date} = req.body;
    if(!firstName || !lastName || !email || !phone || !time || !date){
        return next(new ErrorHandler("Please fill the incomplete details", 400))
    }

    try{
        await Reservation.create({firstName, lastName, email, phone, time, date})
        res.status(200).json({
            success:true,
            message:"Successfully filled the form !"
        })
    }catch(error){
        if(error.name === "ValidationError")
        {
            const validationErrors = Object.values(error.errors).map(err=>err.message)

            return next(new ErrorHandler(validationErrors.join(" , "),400))
        }

        // return next(error)
    }
}