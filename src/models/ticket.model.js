import mongoose from "mongoose";

export const ticketSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true
    },
    purchase_dateTime:{
        type: Date
    },
    amount:{
        type: Number
    },
    purchaser:{
        type: String
    },
    products:[
        {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        },
        quantity: Number
        }
    ]

})

const ticketModel = mongoose.model('tickets' , ticketSchema)
export default ticketModel