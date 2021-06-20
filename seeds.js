const mongoose = require("mongoose");
const Account = require("./model/account");

mongoose.connect("mongodb://localhost:27017/bankingSystem", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const db = async () => {
    await Account.deleteMany({});
    await Account.insertMany([
        {
        name:"Arun",
        bankName:"punjab national bank",
        accountType:"seaving",
        accountNumber:961600080001,
        branch:"kokata",
        contactNumber:79057826788,
        email:"arun@gmail.com",
        city:"kolka",
        address:"2115696",
        balance:2124
        },
        {
        name:"piyush",
        bankName:"State bank of india",
        accountType:"fixed",
        accountNumber:961600080002,
        branch:"kokata",
        contactNumber:79057826788,
        email:"good@gmail.com",
        city:"kolka",
        address:"2333313",
        balance:1310
        },
        {
        name:"raman Tripathi",
        bankName:"punjab national bank",
        accountType:"seaving",
        accountNumber:961600080003,
        branch:"Rambagh",
        contactNumber:7007068661,
        email:"tripathiR@gmail.com",
        city:"PRAYAGRAJ (ALLAHABAD)",
        address:"2/8 ADA COLONY",
        balance:4000
        }
    ]);
};

db();