  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZBLJiu-63bBoXQYo83W1ynT3MTwAvG6g",
    authDomain: "trainstation-dabcf.firebaseapp.com",
    databaseURL: "https://trainstation-dabcf.firebaseio.com",
    projectId: "trainstation-dabcf",
    storageBucket: "trainstation-dabcf.appspot.com",
    messagingSenderId: "491528722684"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
  var trainSchedule = {
    name: firebase.database(name),
    destination: "",
    frequency:0 ,
    nextArrival: 0,
    minsAway: 0,
  }
console.log(trainSchedule)
console.log('ryan');
  var trains = [];
	
	database.ref("/trainstation").on("child_added", function(snapshot){

    var train = snapshot.val();
    console.log(train);

    printTable( train );
    
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});
console.log('ryan');

$("#submit-button").on("click", function(event) {
  event.preventDefault();

   // Get the input values
   
   var newTrain = $('#search-input').val().trim();
   var newDestination = $('#destination-input').val().trim();
   var firstTrain = $('#first-input').val().trim();
   var trainFrequency = $('#frequency-input').val().trim();

   database.ref("/trainstation").push({
    train: newTrain,
    destination: newDestination,
    frequency: trainFrequency,
    minsAway: firstTrain,
    nextArrival: trainFrequency,
  });

});

   function printTable( train ) {
    

var r = $('<tr>');

$(r).append("<td>" + trainSchedule.name + "</td>");
$(r).append("<td>" + trainSchedule.destination + "</td>");
$(r).append("<td>" + trainSchedule.frequency + "</td>");
$(r).append("<td>" + trainSchedule.nextArrival + "</td>");
$(r).append("<td>" + trainSchedule.minsAway + "</td>");
   

  $("#train-table").append(r);

   }