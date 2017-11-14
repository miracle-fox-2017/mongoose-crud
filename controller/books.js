const Book = require('../models/books-schema')

let message = ''

const getAllBooks = (req, res) => {
  Book.find().then(books => {
    res.send(books)
  })
  .catch(err => {
    res.status(500).send({err:err});
  })
}


const create = (req, res) => {
  Book.create(
    {
      isbn     : req.body.isbn,
      title    : req.body.title,
      author   : req.body.author,
      category : req.body.category,
      stock    : req.body.stock
    }
  ).then(book => {
    message = 'succes create one data'
    res.send({book:book, msg:message})
  })
  .catch(err => {
    res.status(500).send({err:err})
  })
}

const findOne = (req, res) => {
  Book.find({_id : req.params.id}).then(book => {
    res.send({book:book})
  })
  .catch(err => {
    res.status(500).send({err:err})
  })
}



const findByIdAndUpdate = (req, res) => {
  Book.findByIdAndUpdate({_id : req.params.id}, {
    isbn     : req.body.isbn,
    title    : req.body.title,
    author   : req.body.author,
    category : req.body.category,
    stock    : req.body.stock
  })
  .then(book => {
    message = 'succes adding one data'
    res.send({book:book,msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({err:err})
  })
}

const findByIdAndRemove = (req, res) => {
  console.log('masuk sini remove');
  Book.findByIdAndRemove({_id : req.params.id})
  .then(book => {
    message = 'succes removing one data'
    console.log(book);
    res.send({book:book, msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({err:err})
  })
}

module.exports = {
  getAllBooks,
  create,
  findOne,
  findByIdAndUpdate,
  findByIdAndRemove
};
