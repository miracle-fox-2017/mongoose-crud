const router=require("express").Router();
const bookController=require("../controllers/bookControll");

// Retrieve all books
router.get("/books",bookController.getAll);

// Add book
router.post("/books",bookController.add);

// Edit Book
router.put("/books/edit/:id",bookController.edit);

// Delete book
router.delete("/books/remove/:id",bookController.remove);

module.exports=router;
