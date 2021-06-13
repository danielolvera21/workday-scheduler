var headerDate = moment().format("[Today is] dddd, MMMM Do YYYY");

//display current date in header
$("#currentDay").text(headerDate);

//grab value from textarea using siblings
$(".saveBtn").on("click", function (event) {
  var textValue = $(this).siblings(".textarea").val();
  var textName = $(this).attr("id");
  alert("Item saved to local storage!");

  //save text to local storage
  localStorage.setItem(textName, textValue);
});

//retireve items from local storage
$("#nine").val(localStorage.getItem("9AM"));
$("#ten").val(localStorage.getItem("10AM"));
$("#eleven").val(localStorage.getItem("11AM"));
$("#twelve").val(localStorage.getItem("12PM"));
$("#one").val(localStorage.getItem("1PM"));
$("#two").val(localStorage.getItem("2PM"));
$("#three").val(localStorage.getItem("3PM"));
$("#four").val(localStorage.getItem("4PM"));
$("#five").val(localStorage.getItem("5PM"));

//function to colorcode tasks depending on the time of day
var blockColor = function () {
  //get time from timeblocks
  //convert to moment object
  //apply red color if timeblock if after the current time moment().isAfter()
  //apply green color if timeblock = current time
};
