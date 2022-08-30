//check of the specific functionality
/*$("li").click(function () {
  //if li is gray
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    //turn to black
    $(this).css({
      color: "black",
      textDecoration: "none",
    });
  } //else
  else {
    //turn to gray
    $(this).css({
      color: "gray",
      textDecoration: "line-through",
    });
  }
});
*/

//this can be done with this two lines of code.
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//to clcick on the X to remove
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//make a new todo enters
//creat an input function and pass it to an event (e)
$("input[type='text'] ").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    let todoText = $(this).val();
    //clean the input box
    $(this).val("");
    //creat a new li abd to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "<li>"
    );
  }
});

//the plus icon fadeout and fade in
$(".fa-plus").click(function () {
  $("input[type='text'] ").fadeToggle();
});
