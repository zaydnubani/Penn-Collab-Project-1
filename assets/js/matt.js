// verifying that the script is connected
console.log("matt.js is connected");

// On click sends user to respective link
  $('#firstLink').click(function(){
    window.location= "https://pixe.la/v1/users/matt-crpss/graphs/project.html"
  });
  $('#secondLink').click(function(){
    window.location= "https://pixe.la/v1/users/matt-crpss/graphs/project"
  });
  $('#thirdLink').click(function(){
    window.location= "https://pixe.la/"
  });

// Fetch data and add to string 
  fetch('https://pixe.la/v1/users/matt-crpss/graphs/project/stats')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var dataString = JSON.stringify(data);
    $("#pixela-stats").text(dataString);
  });


// Send Date to Pixela
var url = "https://pixe.la/v1/users/matt-crpss/graphs/project";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader( "X-USER-TOKEN", "yaaaaaaa");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = '{"date":"20211020","quantity":"45"}';

// Turn string into current date
// Add moment.date() to test function

var currentDate = moment().format('YYYYMMDD');
var newData = data.replace('20211020',currentDate);
console.log(newData);
$('#createtable').click( xhr.send(newData));

// Change Quantity
//  var PT1 = JSON.parse(localStorage.getItem("PT1"));
//   variable.dataset.value = PT1[0].criteria1;
//     PT1[0].criteria2;
//     var PT2 = JSON.parse(localStorage.getItem("PT2"));
//     PT2[0].criteria1;
//     PT2[0].criteria2;
//     var PT3 = JSON.parse(localStorage.getItem("PT3"));
//     PT3[0].criteria1;
//     PT3[0].criteria2;
//     var PT4 = JSON.parse(localStorage.getItem("PT4"));
//     PT4[0].criteria1;
//     PT4[0].criteria2;

// add values together for total tasks completed

// to string() method to turn value into string

// replace quantity with submitted tasks 
// var newQuantity = data.replace('quantity', )

$('#submitTable').click( xhr.send(newQuantity));

console.log(data);
