$(document).ready(function() {
  window.dancers = [];
  window.lights = [];

  const makeDancer = (dancerType) => {
    var dancer = new dancerType(
      $('.dancefloor').height() * Math.random(),
      $('.dancefloor').width() * Math.random(),
      Math.random() * 1000
    );

    const dancerNames = ['Ant_Man', 'Black_Panther', 'Cpt_America', 'Dead_Pool',
      'Dr_Strange', 'Falcon', 'Fury', 'Hawk_Eye', 'Hulk', 'Iron_Man', 'Spider_Man',
      'Thor', 'Wasp', 'Wong'];
    const randomIndex = Math.floor(Math.random() * dancerNames.length - 1) + 1;
    const dancerName = dancerNames[randomIndex];

    dancer.$node.css('background-image', `url(assets/images/${dancerName}.png)`);

    const zIndex = Math.floor(dancer.top);
    dancer.$node.css('z-index', zIndex);

    dancer.$node.on('mouseover', function() {
      dancer.runAway();
    });

    $('.dancefloor').append(dancer.$node);

    window.dancers.push(dancer);
  };

  $('#lights').on('click', function(event) {
    if (window.lights.length < 1) {

      for (let i = 0; i < 5; i++) {
        const timerValue = Math.floor(Math.random() * 4) + 1;
        var light = new Light(
          $('body').width() * Math.random() - 500,
          0,
          timerValue * 1000
        );

        const lightTypes = ['purple', 'yellow', 'blue'];
        const randomIndex = Math.floor(Math.random() * lightTypes.length - 1) + 1;
        const selectedLight = lightTypes[randomIndex];

        light.$node.css('background-image', `url(assets/${selectedLight}.png)`);

        light.$node.css('z-index', 1500);

        $('body').append(light.$node);

        window.lights.push(light);
      }
    } else {
      window.lights.map((light) => light.$node.remove())
      window.lights = []
    }
  });

  $('.addDancerButton').on('click', function(event) {
    if (window.dancers.length <= 15) {
      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      var dancerMakerFunction = window[dancerMakerFunctionName];
      makeDancer(dancerMakerFunction);
    }
  });

  $('#civil-war').on('click', function(event) {

    $('#civil-war').prop('disabled', true);

    if (window.dancers.length % 2 === 1) {
      makeDancer(MakeBouncyDancer);
    }

    const allDancers = window.dancers;
    for (let i = 0; i < allDancers.length; i += 2) {
      var top = $('.dancefloor').height() * Math.random();
      var left = $('.dancefloor').width() * Math.random();
      const hero1 = allDancers[i];
      const hero2 = allDancers[i + 1];
      hero1.battleNumber = Math.random();
      hero2.battleNumber = Math.random();
      if (hero1.battleNumber > hero2.battleNumber) {
        hero1.victory = true;
        hero2.victory = false;
      } else {
        hero2.victory = true;
        hero1.victory = false;
      }

      hero1.$node.animate({
        top: `${top}px`,
        left: `${left - 50}px`
      }, 2000);

      hero2.$node.animate({
        top: `${top}px`,
        left: `${left + 50}px`
      }, 2000);

      setTimeout(() => {
        $('#civil-war').prop('disabled', false);
      }, 5000);

    }

    setTimeout(() => {
      window.dancers = window.dancers.filter((dancer) => {
        if (dancer.victory === false) {
          dancer.$node.remove();
          return false;
        } else {
          return true;
        }
      });
    }, 5000);
  });

  $('#assemble').on('click', function(event) {
    const allDancers = window.dancers;
    let leftTracker = 0;
    const gapDifference = $('.dancefloor').width() / window.dancers.length;

    for (let i = 0; i < allDancers.length; i++) {
      allDancers[i].$node.animate({
        top: 0,
        left: `${leftTracker}px`
      }, 2000);
      leftTracker += gapDifference;
    }
  });
});

