const router=require("express").Router();
const transactionController=require("../controllers/transactionControll");

// Retrieve all transaction
router.get("/transaction",transactionController.getAll);

// Add transaction
router.post("/transaction",transactionController.add);

// Add book to booklist
router.post("/transaction/add-booklist",transactionController.addBooklist);

// Delete transaction
// router.delete("/transaction/remove/:id",transactionController.remove);

module.exports=router;
