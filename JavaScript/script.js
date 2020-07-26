$(document).ready(function () {
  // get current time, date, & hour
  const currentHour = moment().format("k");
  // convert currentHour into an integer so that it can be compared to plannerSetTimeArr
  const currentHourInt = JSON.parse(currentHour);
  const colorChange = document.getElementsByClassName("colorChange");

  // visual value to time
  let timeOf = ":00";
  const AM = " AM";
  const PM = " PM";

  // let hourEight = $("div#hourEight");
  // let hourNine = $("#hourNine");
  // let hourTen = $("#hourTen");
  // let hourEleven = $("#hourEleven");
  // let hourTwelve = $("#hourTwelve");
  // let hourOne = $("#hourOne");
  // let hourTwo = $("#hourTwo");
  // let hourThree = $("#hourThree");
  // let hourFour = $("#hourFour");
  // let hourFive = $("#hourFive");

  // planner time set to 7 so that the += 1 will start at 8
  let plannerTime = 7;

  // display current time & date (not set as variables because they were only used once)
  $("#display-time").text(moment().format("h:mm a"));
  $("#display-date").text(moment().format("dddd MMMM Do[,] YYYY"));

  // empty array to store plans
  let storePlans = [];

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
    $(hourEight).text(setPlannerTime() + timeOf + AM),
    $(hourNine).text(setPlannerTime() + timeOf + AM),
    $(hourTen).text(setPlannerTime() + timeOf + AM),
    $(hourEleven).text(setPlannerTime() + timeOf + AM),
    $(hourTwelve).text(setPlannerTime() + timeOf + PM),
    $(hourOne).text(setPlannerTime() + timeOf),
    $(hourTwo).text(setPlannerTime() + timeOf),
    $(hourThree).text(setPlannerTime() + timeOf),
    $(hourFour).text(setPlannerTime() + timeOf),
    $(hourFive).text(setPlannerTime() + timeOf),
  ];

  // hook add button
  const addButton = $(".saveBtn");

  //change planner time
  for (let i = 0; i < plannerTimeArr.length; i++) {
    if (plannerTimeSetArr[i] < currentHourInt) {
      $(colorChange[i]).addClass("past");
    } else if (plannerTimeSetArr[i] === currentHourInt) {
      $(colorChange[i]).addClass("present");
    } else {
      $(colorChange[i]).addClass("future");
    }
  }

  // -------------------------------------------------------------------------------------
  // Local Storage

  addButton.click(function (event) {
    // idea to link from conversation with Chad Laflamme - https://github.com/cjlaflamme1
    event.preventDefault();

    const whichBtn = event.target;
    const hourName = $(whichBtn).attr("name");
    const hourInput = "#hour" + hourName;

    let hourInputValue = $(hourInput).val();

    function createStorage() {
      window.localStorage.setItem(hourInput, hourInputValue);
    }

    createStorage();
    storePlans.push(localStorage.getItem(hourInput, hourInputValue));

    console.log(storePlans);
  });

  // clear the storage at the end of the day
  //   function newDay() {
  //     console.log("storage cleared");
  //     // if currentHour reaches 0 (24??), clear everything out
  //     // localStorage.clear();
  //     //idk if it's this simple
  //   }

  //   if (currentHour === 2) {
  //     console.log("true");
  //   }

  // --------------------------------------------------------------------------------------

  $(hourOne).text("1:00 PM");
  $(hourTwo).text("2:00 PM");
  $(hourThree).text("3:00 PM");
  $(hourFour).text("4:00 PM");
  $(hourFive).text("5:00 PM");
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
