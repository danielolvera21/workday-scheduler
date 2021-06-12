var headerDate = moment().format("[Today is] dddd, MMMM Do YYYY");

//display current date in header
$("#currentDay").text(headerDate);

$("#timeSlot").on("click", function () {
  console.log("<p> was clicked");
});

$(".saveBtn").on("click", function (event) {
  var textValue = $(this).siblings(".textarea").val();
  var textName = $(this).attr("id");
  console.log(textName);

  //var textValue = event.target.siblings(".textarea").val();
  localStorage.setItem(textName, textValue);
});

$("#nine").val(localStorage.getItem("9AM"));
$("#ten").val(localStorage.getItem("10AM"));
