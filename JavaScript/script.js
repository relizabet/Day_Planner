$(document).ready(function () {
  // get current time, date, & hour
  const currentHour = moment().format("k");
  // convert currentHour into an integer so that it can be compared to plannerSetTimeArr
  const currentHourInt = JSON.parse(currentHour);
  const getInput = document.getElementsByClassName("colorChange");

  // visual value to time
  let timeOf = ":00";
  const AM = " AM";
  const PM = " PM";

  // planner time set to 7 so that the += 1 will start at 8
  let plannerTime = 7;

  // display current time & date (not set as variables because they were only used once)
  $("#display-time").text(moment().format("h:mm a"));
  $("#display-date").text(moment().format("dddd MMMM Do[,] YYYY"));

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
    $("div#hourEight").text(setPlannerTime() + timeOf + AM),
    $("div#hourNine").text(setPlannerTime() + timeOf + AM),
    $("div#hourTen").text(setPlannerTime() + timeOf + AM),
    $("div#hourEleven").text(setPlannerTime() + timeOf + AM),
    $("div#hourTwelve").text(setPlannerTime() + timeOf + PM),
    $("div#hourOne").text(setPlannerTime() + timeOf),
    $("div#hourTwo").text(setPlannerTime() + timeOf),
    $("div#hourThree").text(setPlannerTime() + timeOf),
    $("div#hourFour").text(setPlannerTime() + timeOf),
    $("div#hourFive").text(setPlannerTime() + timeOf),
  ];

  // hook add button
  const addButton = $(".saveBtn");
  let textInput = document.getElementsByClassName("input");
  console.log(textInput);

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

  // --------------------------------------------------------------------------------------
  // Local Storage

  let storePlans = [];
  // will need to stringify input probably

  // capture information typed into input form
  function getTextInput() {
    // console.log(textInput[plannerTime]);
    textInput[plannerTime] = console.log(plannerTime);
  }

  // when add button is clicked the user input should be stored
  addButton.click(function (event) {
    console.log("stored");
    getTextInput();
    // prevent reload
    event.preventDefault();
  });

  // clear the storage at the end of the day
  function newDay() {
    console.log("storage cleared");
    // if currentHour reaches 0 (24??), clear everything out
  }

  // --------------------------------------------------------------------------------------

  $("div#hourOne").text("1:00 PM");
  $("div#hourTwo").text("2:00 PM");
  $("div#hourThree").text("3:00 PM");
  $("div#hourFour").text("4:00 PM");
  $("div#hourFive").text("5:00 PM");
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
//         [ ] localStorage.setItem("blah", "blah")
//         [ ] localStorage.getItem("blah")
//         [ ] localStorage.removeItem("blah", "blah")

// [ ] do this ^ when clicking the save button

// save event into timeblock on button click

// on refresh the saved events stay
