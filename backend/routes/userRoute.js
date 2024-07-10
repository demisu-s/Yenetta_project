const { Router } = require("express");
const { signup, login,getProfile } = require("../controllers/userController");
const { userValidation } = require("../middleware/userValidation");
const { protect } = require("../middleware/userAuthentication");
const router=Router()

router.post('/signup',userValidation,signup)
router.post('/login',login)
router.get('/',protect,getProfile)


module.exports=router