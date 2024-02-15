const express = require('express');
const zod = require('zod')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config');
const { User, Account } = require('../db');
const {authMiddleware} = require('../middleware')

const router = express.Router();
router.use(express.json())

const signupBody = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

const signinBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName: zod.string().optional(),
})
router.post('/signup',async (req,res)=>{
    const result = signupBody.safeParse(req.body)
    if(!result.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const userExist = await User.findOne({
        username : req.body.username
    })
    if(userExist){
        return res.status(411).json({
            message: "Email already taken"
        })
    }
    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    })
    const userId = user._id
    
    await Account.create({
        userID : userId,
        balance : 1+ Math.random() * 1000
    })
    const token  = jwt.sign({userId},JWT_SECRET)
    return res.json({
        message: "User created successfully",
        token: token
    })
})

router.post('/signin',async (req,res)=>{
    console.log(req.body)
    const result = signinBody.safeParse(req.body);
    if(!result.success){
        return res.status(411).json({
            message : "Incorrect inputs"
        })
    }
    const uname = req.body.username;
    const pass = req.body.password;
    const user = await User.findOne({
        username : uname,
        password : pass
    }) 
    console.log(`logged in user_id : ${user._id}`)
    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET)
        return res.status(200).json({
            token : token
        })
        return ;
    }
    return res.status(411).json({
        message : "Invalid Credentials"
    })
})

router.put('/',authMiddleware,async (req,res)=>{
    const result = updateBody.safeParse(req.body)
    if(!result.success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    await User.updateOne({_id : req.userId},req.body)

    return res.status(200).json({
        message: "Updated successfully"
    })
})

router.get('/bulk',async (req,res)=>{
    const filter = req.query.filter || "";
    const users = await  User.find({
        $or : [{
            firstName : {
                "$regex" : filter
            },
            lastName : {
                "$regex" : filter
            }
        }]
    })

    res.json({
        user : users.map((user)=>{
            const data = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
            }
            return data;
        })
    })

})


module.exports = router;