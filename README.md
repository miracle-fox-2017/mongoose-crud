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
| /api/transactions | GET | get all transactions with populated book and customer |
| /api/transactions/:id | GET | get specific transaction with populated book and customer|
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

### Transactions create
| Require | Type |
|---------|------|
| member | ObjectId |
| days | Number |
| out_date | Date (auto generate: today) |
| due_date | Date (auto generate: today + days) |
| in_date | Date (auto generate: null) |
| fine | Number (auto generate: null) |
| booklist | [ObjectId,ObjectId,...] |

### Transactions update
```
HTTP PUT /api/transactions/:id
```
| Require | Type |
|---------|------|
| in_date | Date (auto generate: today) |
| fine | Number (auto generate: (due_date-in_date)*1000) |

