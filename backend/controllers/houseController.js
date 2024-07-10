const asyncHandler = require("express-async-handler");
const House=require('../models/houseModel')
const User=require('../models/userModel')


// Get all house
const getHouse = asyncHandler(async (req, res) => {
    const house = await House.find();
    res.status(200).json(house);
});


//create product 
const createHouse = [
   
    asyncHandler(async (req, res) => {
        const house = await House.create({
           
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            price: req.body.price,
        });

        res.status(201).json(house);
    })
];



  // Update house by ID
  const updateHouse = [
  
    asyncHandler(async (req, res) => {
        const house = await House.findById(req.params.id);
        if (!house) {
            return res.status(404).json({ error: "House not found" });
        }

        const updatedHouse = await House.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedHouse);
    })
];


// Delete house by ID
const deleteHouse = [
   
    asyncHandler(async (req, res) => {
        const house = await House.findById(req.params.id);
        if (!house) {
            return res.status(404).json({ error: "House not found" });
        }

        const deletedHouse = await House.findByIdAndDelete(req.params.id);
        res.status(200).json({ deletedHouse, message: "Deleted successfully" });
    })
];

module.exports={getHouse,createHouse,updateHouse,deleteHouse}