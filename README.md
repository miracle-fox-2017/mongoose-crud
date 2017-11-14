# mongoose-crud
crud with mongoose odm

## List of routes:
| Route | HTTP | Description |
|-------|------|-------------|
| /api/books | GET | get all books |
| /api/books | POST | post new book |
| /api/books/:id | PUT | update specific book |
| /api/books/:id | DELETE | delete specific book |
| /api/customers | GET | get all customers |
| /api/customers | POST | post new customer |
| /api/customers/:id | PUT | update specific customer |
| /api/customers/:id | DELETE | delete specific book |
| /api/transactions | GET | get all transactions |
| /api/transactions | POST | post new transaction |
| /api/transactions/:id | PUT | update specific transaction |
| /api/transactions/:id | DELETE | delete specific transaction |


## Require parameters
### Books
| Require | Type |
|---------|------|
| isbn | String |
| title | String |
| author | String |
| catagory | String |
| stock | Number |

### Customers
| Require | Type |
|---------|------|
| name | String |
| memberid | String |
| address | String |
| zipcode | String |
| phone | String > 6 |

### Transactions
| Require | Type |
|---------|------|
| member | String/ObjectId |
| days | Number |
| out_date | Date |
| due_date | Date |
| in_date | Date |
| fine | Number |
| booklist | [String,String,...] |