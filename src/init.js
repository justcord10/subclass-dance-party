$(document).ready(function() {
  window.dancers = [];

const makeDancer = (dancerType) => {
  // make a dancer with a random position
  var dancer = new dancerType(
    $(".dancefloor").height() * Math.random(),
    $(".dancefloor").width() * Math.random(),
    Math.random() * 1000
  );

  const dancerNames = ["Ant_Man", "Black_Panther", "Cpt_America", "Dead_Pool",
    "Dr_Strange", "Falcon", "Fury", "Hawk_Eye", "Hulk", "Iron_Man", "Spider_Man",
    "Thor", "Wasp", "Wong"];
  const randomIndex = Math.floor(Math.random() * dancerNames.length - 1) + 1;
  const dancerName = dancerNames[randomIndex];

  dancer.$node.css('background-image', `url(assets/images/${dancerName}.png)`);
  $('.dancefloor').append(dancer.$node);

  window.dancers.push(dancer);
}

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    makeDancer(dancerMakerFunction);
  });

  $('#civil-war').on('click', function(event) {
    if (window.dancers.length % 2 === 1) {
      makeDancer(MakeBouncyDancer);
    }
    for (let i = 0; i < window.dancers.length; i += 2) {


      var height = $(".dancefloor").height() * Math.random();
      var width = $(".dancefloor").width() * Math.random();

    }
  });
});

