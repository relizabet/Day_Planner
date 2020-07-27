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

  // hook onto hours to display hour times
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

  // planner time set to 7 so that the += 1 will start at 8
  let plannerTime = 7;

  // display current time & date (not set as variables because they were only used once)
  $("#display-time").text(moment().format("h:mm a"));
  $("#display-date").text(moment().format("dddd MMMM Do[,] YYYY"));

  // empty array to store plans
  let myStorage = [
    { "#hour8": "" },
    { "#hour9": "" },
    { "#hour10": "" },
    { "#hour11": "" },
    { "#hour12": "" },
    { "#hour13": "" },
    { "#hour14": "" },
    { "#hour15": "" },
    { "#hour16": "" },
    { "#hour17": "" },
  ];

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

  // when any add button is clicked, get value of input, set the local storage equal to it
  addButton.click(function (event) {
    // idea to link from conversation with Chad Laflamme - https://github.com/cjlaflamme1
    event.preventDefault();

    const whichBtn = event.target;
    const hourName = $(whichBtn).attr("name");
    let hourInput;
    let hourInputValue;

    hourInput = "#hour" + hourName;
    hourInputValue = $(hourInput).val();

    window.localStorage.setItem("myStorage", JSON.stringify(hourInputValue));
  });

  // clear the storage at the end of the day
  function newDay() {
    if (currentHour === "24") {
      localStorage.clear();
    }
  }

  newDay();

  $(hourOne).text("1:00 PM");
  $(hourTwo).text("2:00 PM");
  $(hourThree).text("3:00 PM");
  $(hourFour).text("4:00 PM");
  $(hourFive).text("5:00 PM");
});
