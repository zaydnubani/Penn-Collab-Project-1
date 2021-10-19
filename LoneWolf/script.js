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

// Table Start
// ```
var createTable = document.querySelector("#createTable");

createTable.addEventListener("click", function(){
    table();
    graph();
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

    // Table Row 2
    var profile2 = document.querySelector("#profile2");
    profile2.innerHTML = profile[0].input;

    // Table Row 3
    var profile3 = document.querySelector("#profile3");
    profile3.innerHTML = profile[0].input;

    // Table Row 4
    var profile4 = document.querySelector("#profile4");
    profile4.innerHTML = profile[0].input;
};
// ```
// Table End

function graph() {
    var profile = JSON.parse(localStorage.getItem("profile"));

    

    // Profile 1
    var P1Tag = document.querySelector("#P1Tag");
    P1Tag.innerHTML = profile[0].input;
    var P1C1 = document.querySelector("#P1C1");
    var P1V1 = document.querySelector("#P1V1");
    P1V1.innerHTML = P1C1.value;
    var P1V1Bar = document.querySelector("#P1V1Bar");
    P1V1Bar.setAttribute("style", "height: " + P1C1.value + "px;");
    var P1C2 = document.querySelector("#P1C2");
    var P1V2 = document.querySelector("#P1V2");
    P1V2.innerHTML = P1C2.value;
    var P1V2Bar = document.querySelector("#P1V2Bar");
    P1V2Bar.setAttribute("style", "height: " + P1C2.value + "px;");

    // Profile 2
    var P2Tag = document.querySelector("#P2Tag");
    P2Tag.innerHTML = profile[1].input;
    var P2C1 = document.querySelector("#P2C1");
    var P2V1 = document.querySelector("#P2V1");
    P2V1.innerHTML = P2C1.value;
    var P2V1Bar = document.querySelector("#P2V1Bar");
    P2V1Bar.setAttribute("style", "height: " + P2C1.value + "px;");
    var P2C2 = document.querySelector("#P2C2");
    var P2V2 = document.querySelector("#P2V2");
    P2V2.innerHTML = P2C2.value;
    var P2V2Bar = document.querySelector("#P2V2Bar");
    P2V2Bar.setAttribute("style", "height: " + P2C2.value + "px;");

    // Profile 3
    var P3Tag = document.querySelector("#P3Tag");
    P3Tag.innerHTML = profile[2].input;
    var P3C1 = document.querySelector("#P3C1");
    var P3V1 = document.querySelector("#P3V1");
    P3V1.innerHTML = P3C1.value;
    var P3V1Bar = document.querySelector("#P3V1Bar");
    P3V1Bar.setAttribute("style", "height: " + P3C1.value + "px;");
    var P3C2 = document.querySelector("#P3C2");
    var P3V2 = document.querySelector("#P3V2");
    P3V2.innerHTML = P3C2.value;
    var P3V2Bar = document.querySelector("#P3V2Bar");
    P3V2Bar.setAttribute("style", "height: " + P3C2.value + "px;");

    // Profile 4
    var P4Tag = document.querySelector("#P4Tag");
    P4Tag.innerHTML = profile[3].input;
    var P4C1 = document.querySelector("#P4C1");
    var P4V1 = document.querySelector("#P4V1");
    P4V1.innerHTML = P4C1.value;
    var P4V1Bar = document.querySelector("#P4V1Bar");
    P4V1Bar.setAttribute("style", "height: " + P4C1.value + "px;");
    var P4C2 = document.querySelector("#P4C2");
    var P4V2 = document.querySelector("#P4V2");
    P4V2.innerHTML = P4C2.value;
    var P4V2Bar = document.querySelector("#P4V2Bar");
    P4V2Bar.setAttribute("style", "height: " + P4C2.value + "px;");
    
}
// Graph Start
// ```


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));

// console.log("i'm connected")
