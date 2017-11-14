const router=require("express").Router();
const customerController=require("../controllers/customerControll");

// Retrieve all customers
router.get("/customers",customerController.getAll);

// Add customer
router.post("/customers",customerController.add);

// Edit customer
router.put("/customers/edit/:id",customerController.edit);

// Delete customer
router.delete("/customers/remove/:id",customerController.remove);

module.exports=router;
