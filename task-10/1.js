var getDates = function(startDate, endDate) {
  var dates = [],
      currentDate = startDate,
      addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};

// Usage
var dates = getDates(new Date(2020,8,22), new Date(2020,9,25));                                                                                                           
dates.forEach(function(date) {
  console.log(date);
});