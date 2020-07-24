$(document).ready(function () {
  // get current time, date, & hour
  const currentTime = moment().format("h:mm a");
  const currentDate = moment().format("dddd MMMM Do[,] YYYY");
  const currentHour = moment().format("kk");
  // convert currentHour into an integer so that it can be compared to plannerSetTimeArr
  const currentHourInt = JSON.parse(currentHour);
  const getInput = document.getElementsByClassName("colorChange");
  // get elements to display date and time
  const displayTime = $("#display-time");
  const displayDate = $("#display-date");

  // giving value to each hour
  let timeOf = ":00";
  const AM = " AM";
  const PM = " PM";

  // planner time set to 7 so that the += 1 will start at 8
  let plannerTime = 7;

  // display current time & date
  $(displayTime).text(currentTime);
  $(displayDate).text(currentDate);

  // empty array to set an array to put times in, starting in military time *** adjust later
  let plannerTimeSetArr = [];

  // this takes planner time and makes it add one
  function setPlannerTime() {
    plannerTime += 1;
    plannerTimeSetArr.push(plannerTime);
    return plannerTime;
  }

  // setting all of the time changes to an array
  let plannerTimeArr = [
    $("div.hourEight").text(setPlannerTime() + timeOf + AM),
    $("div.hourNine").text(setPlannerTime() + timeOf + AM),
    $("div.hourTen").text(setPlannerTime() + timeOf + AM),
    $("div.hourEleven").text(setPlannerTime() + timeOf + AM),
    $("div.hourTwelve").text(setPlannerTime() + timeOf + PM),
    $("div.hourOne").text(setPlannerTime() + timeOf),
    $("div.hourTwo").text(setPlannerTime() + timeOf),
    $("div.hourThree").text(setPlannerTime() + timeOf),
    $("div.hourFour").text(setPlannerTime() + timeOf),
    $("div.hourFive").text(setPlannerTime() + timeOf),
  ];

  //change planner time
  for (let i = 0; i < plannerTimeArr.length; i++) {
    if (plannerTimeSetArr[i] < currentHourInt) {
      $(getInput[i]).addClass("past");
    } else if (plannerTimeSetArr[i] === currentHourInt) {
      $(getInput[i]).addClass("present");
    } else {
      $(getInput[i]).addClass("future");
    }
  }

  $("div.hourOne").text("1:00 PM");
  $("div.hourTwo").text("2:00 PM");
  $("div.hourThree").text("3:00 PM");
  $("div.hourFour").text("4:00 PM");
  $("div.hourFive").text("5:00 PM");
});
// Action Plan
/////////////////////////

// display current day
// [x] moment.js displays text of current day in div beneath header

// timeblocks for 8am - 5pm
// [/] option a. write out each block in html
// [x] option b. create the blocks dynamically

// each timeblock color coded
// past, present, future
// [x] js color code time
//      if time > current time = grey
//      if time === current time = blue
//      if time < currrent time = green
// [x] assign blocks value based on time?
//      [x] use these values to determine the color
//

// enter event into timeblock
// [ ] get text input from whatever is typed in
//     [ ] save to local storage
//     [ ] store as new printed text in input
//         [ ] change input element to a static one?
//         [ ]
// [ ] do this ^ when clicking the save button

// save event into timeblock on button click

// on refresh the saved events stay
