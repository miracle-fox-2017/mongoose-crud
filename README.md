# mongoose-crud
crud with mongoose odm

My App name

list of user routes:

Route                |     HTTP     |            Description               |
-----------------------------------------------------------------------
/api/books           |     GET      | Get all the books                    |
/api/customers       |     GET      | Get all the customers                |
/api/transactions    |     GET      | Get all the transactions             |
/api/books/:id       |     GET      | Get a single book                    |
/api/customers/:id   |     GET      | Get a single customer                |
/api/books           |     POST     | Create a book                        |
/api/customer        |     POST     | Create a customer                    |
/api/transactions    |     POST     | Create a transaction                 |
                     |              | add (member, days, booklist)         |
/api/books/:id       |    DELETE    | Delete a book                        |
/api/customers/:id   |    DELETE    | Delete a customer                    |                 
/api/transactions/:id|    DELETE    | Delete a transaction                 |
/api/books/:id       |     PUT      | Update a book with new info          |
/api/customer/:id    |     PUT      | Update a customer with new info      |
/api/transactions/:id|     PUT      | Update a transaction with new info   |
                     |              | add (in_date)                        |



Usage
With only npm:

npm install
npm start

Access the website via http://localhost:3000 or API via http://localhost:3000/api
