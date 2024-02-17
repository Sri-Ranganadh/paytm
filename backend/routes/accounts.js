const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const zod = require('zod');
const { default: mongoose } = require("mongoose");

const router = express.Router()

router.use(express.json())
router.get('/balance',authMiddleware, async(req,res)=>{
    const account =await Account.findOne({
        userID : req.userId
    })
    
    res.json({
        balance : account.balance
    })
})



router.post("/transfer", authMiddleware, async (req, res) => {
    console.log(req.body)
    // const session1 = await mongoose.startSession();
    
    // session1.startTransaction();
    const { amount, to } = req.body;
    // Fetch the accounts within the transaction
    const account = await Account.findOne({userID:req.userId})
    if(!account){
        res.status(400).json({message:'Invalid user account'})
    }
    if (account.balance < amount) {
        //await session1.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({userID:to}) //.session(session1);
    if (!toAccount) {
        //await session1.abortTransaction();
        return res.status(400).json({
            message: "Invalid to-account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userID: req.userId }, { $inc: { balance: -amount } }) //.session(session1);
    await Account.updateOne({ userID: to }, { $inc: { balance: amount } }) //.session(session1);

    // Commit the transaction
    //await session1.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});


module.exports = router ; 