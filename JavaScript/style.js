let timeDate = $(".time-date");

timeDate = moment().format("MMMM Do[,] YYYY");
$("h2").text(timeDate);
