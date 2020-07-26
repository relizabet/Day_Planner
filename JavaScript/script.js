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

  let hourEight = $("#hourEight");
  let hourNine = $("#hourNine");
  let hourTen = $("#hourTen");
  let hourEleven = $("#hourEleven");
  let hourTwelve = $("#hourTwelve");
  let hourOne = $("#hourOne");
  let hourTwo = $("#hourTwo");
  let hourThree = $("#hourThree");
  let hourFour = $("#hourFour");
  let hourFive = $("#hourFive");

  let hourInput;

  // planner time set to 7 so that the += 1 will start at 8
  let plannerTime = 7;

  // display current time & date (not set as variables because they were only used once)
  $("#display-time").text(moment().format("h:mm a"));
  $("#display-date").text(moment().format("dddd MMMM Do[,] YYYY"));

  // empty array to store plans
  let storePlans = [{
    hour:
  }];

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

  function checkStorage() {
    if (window.localStorage.length === 0) {
      window.localStorage.setItem(hourInput, hourInputValue);
      console.log("no local storage");
    } else {
      console.log("local storage");
    }
  }

  checkStorage();

  addButton.click(function (event) {
    // idea to link from conversation with Chad Laflamme - https://github.com/cjlaflamme1
    event.preventDefault();

    const whichBtn = event.target;
    const hourName = $(whichBtn).attr("name");
    hourInput = "#hour" + hourName;
    console.log(hourInput);

    $(hourInput).text("overwrite");

    let hourInputValue = $(hourInput).val();
    storePlans = JSON.parse(window.localStorage.getItem("storePlans"));

    // let keyValue = {};
    // keyValue[hourInput] = hourInputValue;

    window.localStorage.setItem(hourInput, hourInputValue);

    // storePlans.push(keyValue);
    // console.log(storePlans);
  });

  // for (let i = 0; i < localStorage.length; i++) {
  //   const key = localStorage.key[i];
  //   console.log;
  //   const value = localStorage.getItem(key);
  //   $(hourInput).text += `${key}: ${value}`;
  // }

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
