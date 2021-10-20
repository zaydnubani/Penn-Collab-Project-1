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
        type: CSelect.dataset.value,
        input: CInput.value
     };
    criteria.push(criteriaCreate);
    localStorage.setItem("criteria", JSON.stringify(criteria));
}
// ```
// Criteria Create End

// Profile Create Start
// ```
var profileInput = document.querySelector("#profileInput");

profileInput.addEventListener('click', function(event){
    event.preventDefault;
    profileCreate();
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
        type: PSelect.dataset.value,
        input: PInput.value
    };
    profile.push(profileCreate);
    // save to local storage and display new value
    localStorage.setItem("profile", JSON.stringify(profile));
    
}
// ```
// Profile Create End

// Table Start
// ```
var createTable = document.querySelector("#createTable");

createTable.addEventListener("click", function(){
    table();
});

function table(){
    var profile = JSON.parse(localStorage.getItem("profile"));
    var criteria = JSON.parse(localStorage.getItem("criteria"));

    // Table header
    var criteria1 = document.querySelector("#criteria1");
    var criteria2 = document.querySelector("#criteria2");
    criteria1.innerHTML = criteria[0].input;
    criteria2.innerHTML = criteria[1].input;

    // Table Row 1
    var profile1 = document.querySelector("#profile1");
    profile1.innerHTML = profile[0].input;
    profile1.setAttribute("data-name", profile[0].input)
    console.log("profile[0].input");

    // Table Row 2
    var profile2 = document.querySelector("#profile2");
    profile2.innerHTML = profile[1].input;

    // Table Row 3
    var profile3 = document.querySelector("#profile3");
    profile3.innerHTML = profile[2].input;

    // Table Row 4
    var profile4 = document.querySelector("#profile4");
    profile4.innerHTML = profile[3].input;
};
// ```
// Table End

// Progress Tracker Start
// ```
var submitTable = document.querySelector("#submitTable");

submitTable.addEventListener("click", function(){
    PT1();
    PT2();
    PT3();
    PT4();
    progressTracker();
});

function progressTracker(){
    var PT2 = JSON.parse(localStorage.getItem("PT2"));
    var PT3 = JSON.parse(localStorage.getItem("PT3"));
    var PT4 = JSON.parse(localStorage.getItem("PT4"));
    
    // Profile 1
    var PT1 = JSON.parse(localStorage.getItem("PT1"));
    var PTR1 = document.querySelector("#PTR1");
    var PT1C1 = document.querySelector("#PT1C1");
    var PT1C2 = document.querySelector("#PT1C2");
    PT1C1.setAttribute("value", PT1[0].criteria1);
    PT1C2.setAttribute("value", PT1[0].criteria2);
    PTR1.innerHTML = PT1[0].profile;

     // Profile 2
     var PT2 = JSON.parse(localStorage.getItem("PT2"));
     var PTR2 = document.querySelector("#PTR2");
     var PT2C1 = document.querySelector("#PT2C1");
     var PT2C2 = document.querySelector("#PT2C2");
     PT2C1.setAttribute("value", PT2[0].criteria1);
     PT2C2.setAttribute("value", PT2[0].criteria2);
     PTR2.innerHTML = PT2[0].profile;

     // Profile 3
     var PT3 = JSON.parse(localStorage.getItem("PT3"));
     var PTR3 = document.querySelector("#PTR3");
     var PT3C1 = document.querySelector("#PT3C1");
     var PT3C2 = document.querySelector("#PT3C2");
     PT3C1.setAttribute("value", PT3[0].criteria1);
     PT3C2.setAttribute("value", PT3[0].criteria2);
     PTR3.innerHTML = PT3[0].profile;
    
     // Profile 4
     var PT4 = JSON.parse(localStorage.getItem("PT4"));
     var PTR4 = document.querySelector("#PTR4");
     var PT4C1 = document.querySelector("#PT4C1");
     var PT4C2 = document.querySelector("#PT4C2");
     PT4C1.setAttribute("value", PT4[0].criteria1);
     PT4C2.setAttribute("value", PT4[0].criteria2);
     PTR4.innerHTML = PT4[0].profile;
}

function PT1() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    // Load from local storage
    var PT1 = JSON.parse(localStorage.getItem("PT1"));
    // Process the default value
    if(PT1 == null) PT1 = [];
    // Process the user input
    var P1C1 = document.querySelector("#P1C1");
    var P1C2 = document.querySelector("#P1C2");
    var profileCreate = {
        profile: profile[0].input,
        criteria1: P1C1.value,
        criteria2: P1C2.value
    };
    PT1.push(profileCreate);
    // save to local storage and display new value
    localStorage.setItem("PT1", JSON.stringify(PT1));
    
};

function PT2() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    // Load from local storage
    var PT2 = JSON.parse(localStorage.getItem("PT2"));
    // Process the default value
    if(PT2 == null) PT2 = [];
    // Process the user input
    var P2C1 = document.querySelector("#P2C1");
    var P2C2 = document.querySelector("#P2C2");
    var profileCreate = {
        profile: profile[1].input,
        criteria1: P2C1.value,
        criteria2: P2C2.value
    };
    PT2.push(profileCreate);
    // save to local storage and display new value
    localStorage.setItem("PT2", JSON.stringify(PT2));
};

function PT3() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    // Load from local storage
    var PT3 = JSON.parse(localStorage.getItem("PT3"));
    // Process the default value
    if(PT3 == null) PT3 = [];
    // Process the user input
    var P3C1 = document.querySelector("#P3C1");
    var P3C2 = document.querySelector("#P3C2");
    var profileCreate = {
        profile: profile[2].input,
        criteria1: P3C1.value,
        criteria2: P3C2.value
    };
    PT3.push(profileCreate);
    // save to local storage and display new value
    localStorage.setItem("PT3", JSON.stringify(PT3));
};

function PT4() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    // Load from local storage
    var PT4 = JSON.parse(localStorage.getItem("PT4"));
    // Process the default value
    if(PT4 == null) PT4 = [];
    // Process the user input
    var P4C1 = document.querySelector("#P4C1");
    var P4C2 = document.querySelector("#P4C2");
    var profileCreate = {
        profile: profile[3].input,
        criteria1: P4C1.value,
        criteria2: P4C2.value
    };
    PT4.push(profileCreate);
    // save to local storage and display new value
    localStorage.setItem("PT4", JSON.stringify(PT4));
};

// ```
// Progress Tracker End





var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));

// console.log("i'm connected")
console.log("i'm connected");

