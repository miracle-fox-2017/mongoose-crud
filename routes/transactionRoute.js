const router=require("express").Router();
const transactionController=require("../controllers/transactionControll");

// Retrieve all transaction
router.get("/transaction",transactionController.getAll);

// Add transaction
router.post("/transaction",transactionController.add);

// Return book
router.put("/transaction/return",transactionController.returnBook);

module.exports=router;
