$(document).ready(function() {
  window.dancers = [];

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
    dancer.$node.css('z-index', zIndex)

    $('.dancefloor').append(dancer.$node);

    window.dancers.push(dancer);
  };

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    makeDancer(dancerMakerFunction);
  });

  $('#civil-war').on('click', function(event) {
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
      }, 2000)

      hero2.$node.animate({
        top: `${top}px`,
        left: `${left + 50}px`
      }, 2000)

    };

    setTimeout(() => {
      window.dancers = window.dancers.filter((dancer) => {
        if (dancer.victory === false) {
          dancer.$node.remove();
          return false;
        } else {
          return true;
        };
      })
    }, 5000);
  });
});

