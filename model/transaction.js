const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/bankingSystem", { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("connected");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

const transactionSchema = new mongoose.Schema({
    Date:Date,
    Description:String,
    seen: { type:Boolean,
            default:false
        }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;