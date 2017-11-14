module.exports = function(inDate, dueDate){
  if(inDate > dueDate){
    var timeDiff = Math.abs(inDate.getTime() - dueDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays*5000
  }else{
    return 0
  }
}
