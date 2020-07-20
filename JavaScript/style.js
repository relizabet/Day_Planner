// planner header date and time
let currentTime = $(".date-time");
let currentDate = $(".time-date");
let displayTime = $("#display-time");
let displayDate = $("#display-date");

// get current date && time
let now = moment();
console.log(now);

// get current time
currentTime = moment().format("h:mm a");
// get current date
currentDate = moment().format("MMMM Do[,] YYYY");

//display current time
$(displayTime).text(currentTime);
//display current date
$(displayDate).text(currentDate);

// Action Plan
/////////////////////////

// display current day
// [x] moment.js displays text of current day in div beneath header

// timeblocks for 8am - 5pm
// [x] option a. write out each block in html
//      doing this seems more stable
//      these things will not change
//      use input
//      [ ] capture input with jQuery, store in local storage
// [/] option b. create the blocks dynamically
//      doing this might cause a rendering problem

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
