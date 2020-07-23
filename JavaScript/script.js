// get current time
const currentTime = moment().format("kk:mm");
// get current date
let currentDate = moment().format("dddd MMMM Do[,] YYYY");
// get current hour
let currentHour = moment().format("kk");
let currentHourInt = JSON.parse(currentHour);
console.log(currentHourInt);
let getInput = $("input");

//get hour class
let hourClass = document.getElementsByClassName("hour");

let displayTime = $("#display-time");
let displayDate = $("#display-date");

// set each hour with time

// get current date && time
let now = moment();
// console.log(hourClass);

//display current time
$(displayTime).text(currentTime);
//display current date
$(displayDate).text(currentDate);

// to duplicate time block
const timeBlock = $(".time-block");

// giving value to each hour
// maybe an if here as well for if time this then use am/pm
const timeOf = ":00";

// planner time set to 7 so that the += 1 will start at 8
let plannerTime = 7;

// empty array to set an array to put times in, starting in military time *** adjust later
let plannerTimeSetArr = [];

// this takes planner time and makes it add one
function setPlannerTime() {
  plannerTime += 1;
  plannerTimeSetArr.push(plannerTime);

  return plannerTime;
}

// console.log(plannerTime);

// setting all of the time changes to an array
let plannerTimeArr = [
  $("div.hourEight").text(setPlannerTime() + timeOf),
  $("div.hourNine").text(setPlannerTime() + timeOf),
  $("div.hourTen").text(setPlannerTime() + timeOf),
  $("div.hourEleven").text(setPlannerTime() + timeOf),
  $("div.hourTwelve").text(setPlannerTime() + timeOf),
  $("div.hourOne").text(setPlannerTime() + timeOf),
  $("div.hourTwo").text(setPlannerTime() + timeOf),
  $("div.hourThree").text(setPlannerTime() + timeOf),
  $("div.hourFour").text(setPlannerTime() + timeOf),
  $("div.hourFive").text(setPlannerTime() + timeOf),
];

// console.log(plannerTimeSetArr);

//change planner time
for (let i = 0; i < plannerTimeArr.length; i++) {
  console.log(plannerTimeSetArr[i]);
  console.log(currentHourInt);
  if (plannerTimeSetArr[i] < currentHourInt) {
    console.log("past");
    getInput.addClass("past");
  } else if (plannerTimeSetArr[i] === currentHourInt) {
    getInput.addClass("present");
    console.log("present");
  } else {
    getInput.addClass("future");
    console.log("future");
  }
}

// Action Plan
/////////////////////////

// display current day
// [x] moment.js displays text of current day in div beneath header

// timeblocks for 8am - 5pm
// [/] option a. write out each block in html
//      doing this seems more stable
//      these things will not change
//      use input
//      [ ] capture input with jQuery, store in local storage
// [x] option b. create the blocks dynamically
//      doing this might cause a rendering problem // no it doesn't
//      [ ]

// each timeblock color coded
// past, present, future
// [ ] js color code time
//      if time > current time = grey
//      if time === current time = blue
//      if time < currrent time = green
// [ ] assign blocks value based on time?
//      [ ] with moment js set time, as opposed to doing it
//          statically
//          [ ] use these values to determine the color
//

// enter event into timeblock
// [ ] get text input from whatever is typed in
//     [ ] save to local storage
//     [ ] store as new printed text in input
//         [ ] change input element to a static one?
//         [ ]
// [ ] do this ^ when clicking the save button
// [ ]

// save event into timeblock on button click

// on refresh the saved events stay
