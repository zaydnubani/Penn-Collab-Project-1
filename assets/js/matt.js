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
$('#submitTable').click( xhr.send(newData));

// Change quantity

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
// Change Quantity
var profileLocal = JSON.parse(localStorage.getItem("PT1"));
var criteriaValue1 = parseInt(profileLocal[0].criteria1);
// var criteriaValue2 =  profileLocal[0].criteria2;
console.log(parseInt(criteriaValue1))
//     PT2[0].criteria2;
var profileLocal2 = JSON.parse(localStorage.getItem("PT2"));
var criteriaValue2 = parseInt(profileLocal2[0].criteria1);
console.log(typeof criteriaValue2)

//     PT3[0].criteria2;
var profileLocal3 = JSON.parse(localStorage.getItem("PT3"));
var criteriaValue3 = parseInt(profileLocal3[0].criteria1);

//     PT4[0].criteria2;
var profileLocal4 = JSON.parse(localStorage.getItem("PT4"));
var criteriaValue4 = parseInt(profileLocal4[0].criteria1);


// add values together for total tasks completed
var newValue = criteriaValue1 + criteriaValue2 + criteriaValue3 + criteriaValue4
console.log(newValue);
// to string() method to turn value into string
// newValueString = newValue.toString();
console.log(newValue);
// replace quantity with submitted tasks 
var newQuantity = data.replace('45', newValue )
 $('#submitTable').click( xhr.send(newQuantity));
console.log(newQuantity);
console.log(data);
