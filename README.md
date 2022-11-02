# Work Day Scheduler

Module 5 Challege

<!-- TODO: Insert Screenshot and link to project here -->

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## TODO List
* [ ] Install Node.js
* [ ] Install Day.js
* [ ] When opening this application, show the current day at the top of the calendar.
* [ ] When scrolling down, show timeblocks for standard business hours
* [ ] When viewing the timeblocks for the day, each timeblock should be color coded to indicate wheter it was in the past, present, or future.
    - Google Calendar typically grays out past events
* [ ] When clicking a timeblock, open the event.
* [ ] When clickign teh save button for the timeblock, the text for the event is saved in local storage.
    - Timewarrior stores events in a file, probably should follow that as an example.
* [ ] When the page is refreshed, the saved events persist.

## Some other things to note

### Why no jQuery in this project?
While this week's assignment is all about Third-Party APIs, the use of [jQuery not only is not needed](https://youmightnotneedjquery.com/), but could be detremental to the focus on using Vanilla JavaScript.

The short story of it: jQuery [was introduced in 2006](https://en.wikipedia.org/wiki/JQuery) at a time when [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) was starting to take off in JavaScript. AJAX had gained popularity [around 2005](https://www.w3schools.com/php/php_ajax_intro.asp#) when Google started using it for one of their projects.

Today, we can simily use AJAX with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). 

In addition, thanks to the addition of `querySelector` and `querySelectorAll` being added to JavaScript in 2013 throught the [W3C Selectors API](https://www.w3.org/TR/selectors-api/), much of jQuery's purpose has been superceded by standard JavaScript and DOM, but that doesn't mean we can't write up some shorthand functions to reduce some of the typing.  But the biggest nail in jQuery's coffin is the use of string interpolation, which uses the `$`, which could conflict with jQuery's use of the `$` for its purpose.

Honestly, I like writing aliases than using a big CHONKY jQuery library.  While `$(<p>)` could be used to create a paragraph in jQuery, using something like `ce("p")` (where `ce` represents the `document.createElement` method), there is some user control.  Also, it would be a great way to build a personal library of nicely documented arrow functions with closures.  (See `qs` and `css` in my Password Generator repo.)

Here's something to think about: What if we wrote an arrow function that generated HTML like [emmet.io](https://emmet.io/)? Maybe non the stuff that goes in the header, but something to rapidly spin up boilerplate body content? Imagine if jQuery's element creation worked like that!

### When using the FormData API, use the POST request method

I seemed to notice we are using quite a few [FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData) examples, but not setting the `<form>` request method to `post`. It should be noted that [the `method` attribute value is set to `get` by default](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method), which means that any data submitted will appear in the location bar. Typically we don't want to do that. Fortunately, many of the [examples of using FormData objects](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects) on the MDN website show how to use `FormData` with the `post`.  While there are technically nine [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), in most cases we will use `get` and `post`.

A better API that we can use to practice `get` methods would be the [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) interface.

### RapidAPI
Finally, let's give a shout out to [Rapid API](https://rapidapi.com/). (No, this repo is not sponsored by them...unless they want it to be.) The last couple of years, I've been following them on Twitter of which [their Twitter feed](https://twitter.com/Rapid_API) is a source of great knowledge. In addition to their [resources](https://rapidapi.com/resources/) and [hub of thousands of APIs](https://rapidapi.com/hub) (Many of which are FREE to use), I can't wait to start using some of the APIs they have listed.

### Reminder: Day.js is nice, but Temporal will be the future.
I can see why we want to use [Day.js](https://day.js.org/) over JavaScript's built-in [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or the legacy [Moment.js](https://momentjs.com/docs/), but keep an eye out on the [Temporal](https://tc39.es/proposal-temporal/docs/index.html) addition to ECMAScript.
