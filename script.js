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
  $(".saveBtn").on( "click", function() {
    console.log( $( this ) );
    var id = $( this ).parent().attr("id");
    var Event = $( this ).siblings("textarea").val() ;
    localStorage.setItem(id, Event);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //  dayjs().hour()
    $(".time-block").each(function(){
      var currentTime = dayjs().hour()
      var time = $ ( this ).attr("id").slice(5)
      console.log( currentTime, time )
      //if else statments
      // if my time is less than my current time it's in past if equal pres, if greater it's CSSFontFeatureValuesRule
      // based on that add the class you want to see to add the VideoColorSpace
      // add class/remove class 
      if (currentTime > time) {
      $( this ).addClass("past");
      $( this ).removeClass("future", "present");
      }
      if (currentTime == time) {
      $( this ).addClass("present");
      $( this ).removeClass("future", "past");
      }
      if (currentTime < time) {
      $( this ).addClass("future");
      $( this ).removeClass("past", "present");
      }
    })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(".time-block").each(function(){
    console.log( $( this ).attr("id"));
    var ID = $( this ).attr("id");
    $(this).children("textarea").val(localStorage.getItem(ID));
  })

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format('MM/DD/YYYY'))
});
