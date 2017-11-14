// var due_date = new Date();
// due_date.setDate(due_date.getDate() + 6);

// console.log(new Date('2017-11-14T12:14:52.416Z'));
// console.log(due_date);

var due_date = new Date("2017-11-20T11:54:28.705Z");
var in_date = new Date("2017-11-25T11:54:28.705Z");

console.log((in_date.getDate() - due_date.getDate()) * 1000)