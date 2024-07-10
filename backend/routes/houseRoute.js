const {Router}=require('express')
const {isAdmin}=require('../middleware/adminAuthorization')
const {protect}=require('../middleware/userAuthentication')
const { createHouse, updateHouse, deleteHouse, getHouse } = require('../controllers/houseController')

const router=Router()
//routes
router.post('/createHouse',protect,isAdmin,createHouse)
router.put('/updateHouse',protect,isAdmin,updateHouse)
router.delete('/deleteHouse',protect,isAdmin,deleteHouse)
router.get('/getHouse',protect,getHouse)


module.exports=router