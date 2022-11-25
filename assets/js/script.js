/* File: assets/js/script.js */
//import $ from "jquery";
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
//import dayjs from "./dayjs";
//import calendar from "dayjs/plugin/calendar";

/*
localStorage.setItem("weather","snow");
console.log(localStorage.getItem("weather"));


let conditions = {
  temperature : 50,
  humidity: 20,
  weather: "snow"
};

localStorage.setItem("weather",JSON.stringify(conditions)); // setting
console.log(localStorage.getItem("weather"));
console.log(JSON.parse(localStorage.getItem("weather")).humidity); // getting
*/

/*
//window.$ = $;
//window.jQuery = jQuery;
*/
//let calendar = require('dayjs/plugin/calendar');

/* Add the tabs for our views */
/* Let's change it up and try using the arrow operator */
$(() => {
    $("#tabs").tabs();
});

/* Insert today's date! */
let today = dayjs();
$("#today").text(today.format('dddd, MMMM D, YYYY'));


// These two lines won't process
//const calendar = require('dayjs/plugin/calendar');
//dayjs.extend(calendar);

dayjs.extend(window.dayjs_plugin_calendar);   // This does work!
/*dayjs().calendar(dayjs('2022-11-14'));*/    // This works


/*
dayjs().calendar(null, {
  sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
  nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
  nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
  lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
  lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
  sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
})
*/

/*
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});
  */