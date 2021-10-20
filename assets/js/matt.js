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
    $("#pixela-graph").text(dataString);
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

// Change Quantity

var newQuantity = data.replace('quantity', )

$('#createtable').click( xhr.send(newData));


console.log(data);
