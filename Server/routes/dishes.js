const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

router.use(express.json());

router.get('/', (req,res) => {
    Dish.find({}, (err, dishes)=>{
        if(err) console.log(err);
        else res.json(dishes);
    })
})

router.post('/create',async(req,res)=>{
    Dish.create({
        name: req.body.name,
        description: req.body.description

    },(err,dish)=>{
        if(err) console.log(err);
        else res.send(dish);
    })
})

router.post('/update',(req,res)=>{
    Dish.findOneAndUpdate({ _id: req.body._id},{
        name: req.body.name,
        discription: req.body.description
    },
    async (err, dish)=>{
        if(err) {
            console.log(err);
            res.json({
                "Status": err
            })
        }
        else {
            await dish.save();
            res.json({
                "Status": "Success"
            })
        }
    })
})

router.post('/delete',(req,res)=>{
    Dish.findOneAndDelete({ _id: req.body._id},
        (err, dish)=>{
            if(err) {
                console.log(err);
                res.json({
                    "Status": err
                })
            }
            else if(dish){
                res.json({
                    "Status": "Success"
                })
            } else {
                res.json({
                    "Status": "Dish not found"
                })
            }
        })
})
module.exports = router;