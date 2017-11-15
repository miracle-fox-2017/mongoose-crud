let calculateFine = (due_date) =>{
  let today = new Date()
  let fine = today.getDate()-due_date.getDate()
  if(fine<0){
    return 0
  } else {
    return fine*1000
  }
}

module.exports = calculateFine;