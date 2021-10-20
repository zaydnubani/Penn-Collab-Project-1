console.log("script.js connected");

// header js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));

function update() {
    $('#clock').html(moment().format('h:mm:ss'));
  }
  
  setInterval(update, 1000);
  // Criteria Create Start
// ```
var criteriaInput = document.querySelector("#criteriaInput");

criteriaInput.addEventListener('click', function(event){
    event.preventDefault;
    criteriaCreate();
})

function criteriaCreate() {
    var criteria = JSON.parse(localStorage.getItem("criteria"));
    if(criteria == null) criteria = [];
    var CSelect = document.querySelector("#CSelect");
    var CInput = document.querySelector("#CInput");
    var criteriaCreate = {
        type: CSelect.value,
        input: CInput.value
     };
    criteria.push(criteriaCreate);
    localStorage.setItem("criteria", JSON.stringify(criteria));

    // var CPTable = document.querySelector("#CPTable");
    // CPTable.innerHTML = " ";

    for(i=0;i<criteria.length;i++){
        var criteriaSelect = document.querySelector('#criteriaSelect')
        var criteriaOption = document.createElement("option");
        var appendedCriteriaOption = criteriaSelect.appendChild(criteriaOption);
        appendedCriteriaOption.innerHTML = criteria[i].input;
    }
}
// ```
// Criteria Create End

// Profile Create Start
// ```
var profileInput = document.querySelector("#profileInput");

profileInput.addEventListener('click', function(event){
    event.preventDefault;
    profileCreate();
    tester();
})

function profileCreate() {
    // Load from local storage
    var profile = JSON.parse(localStorage.getItem("profile"));
    // Process the default value
    if(profile == null) profile = [];
    // Process the user input
    var PSelect = document.querySelector("#PSelect");
    var PInput = document.querySelector("#PInput");
    var profileCreate = {
        type: PSelect.value,
        input: PInput.value
    };
    profile.push(profileCreate);
    // save to local storage and display new value
    localStorage.setItem("profile", JSON.stringify(profile));
    
    // var CPTable = document.querySelector("#CPTable");
    // CPTable.innerHTML = " ";

    // var tableRow = document.getElementsByClassName("tableRow");
    // tableRow.innerHTML = " ";

    for(i=0;i<profile.length;i++){
        var profileSelect = document.querySelector('#profileSelect')
        var profileOption = document.createElement("option");
        var appendedProfileOption = profileSelect.appendChild(profileOption);
        appendedProfileOption.innerHTML = profile[i].input;
    }
}
// ```
// Profile Create End

tester();

function tester(){
    var profile = JSON.parse(localStorage.getItem("profile"));
    var CPTable = document.querySelector("#CPTable");
    var criteria = JSON.parse(localStorage.getItem("criteria"));
    // CPTable.innerHTML = " ";
    for(i=0;i<profile.length;i++){
        var createTR = document.createElement("tr");
        createTR.setAttribute("class", profile[i].input);
        var createTD = document.createElement("td");
        CPTable.appendChild(createTR);
        createTR.appendChild(createTD);
        createTD.innerHTML = profile[i].input;
        console.log(CPTable);
    };
    var tableHeader = document.querySelector("#tableHeader");
    var createTH = document.createElement("th");
        createTH.innerHTML = " ";
        tableHeader.appendChild(createTH);

    for(i=0;i<criteria.length;i++){
        var createTH = document.createElement("th");
        createTH.innerHTML = criteria[i].input;
        tableHeader.appendChild(createTH);
    };
};


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));

console.log("i'm connected");

