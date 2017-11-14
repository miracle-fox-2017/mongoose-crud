# mongoose-crud
crud with mongoose odm

## REST API

List of user routes:

| Route               | HTTP            | Description     |
|:--------------------|:----------------|:----------------|
| `/books`        |GET            | Get all the books|
| `/books`        |POST           | Create a book|
| `/books/:id`    |DELETE         | Delete a book|
| `/books/:id`    |PUT            | Update a book with new info|
| `/customers`    |GET            | Get all the customers|
| `/customers`    |POST           | Create a customer|
| `/customers/:id`|DELETE         | Delete a customer|
| `/customers/:id`|PUT            | Update a customer with new info|
| `/transactions`        |GET            | Get all the transactions|
| `/transactions`        |POST           | Create a transaction with input member and some books|
| `/transactions/:id`    |DELETE         | Delete a transaction|
| `/transactions/:id`    |GET            | Show detail transactions include member and books|
| `/transactions/:id`    |PUT            | To return a book and get a transaction, if you are late you are fined|

## Usage
with only npm :
```
$ git clone
$ npm install
$ npm start
```
