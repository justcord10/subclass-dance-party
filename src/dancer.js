//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/

var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.battleNumber = 0;
  this.victory = false;
  this.running = false;
  this.setPosition(top, left);
  this.step();
};

MakeDancer.prototype.step = function() {
  setTimeout(() => this.step(), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.runAway = function() {
  if (!this.running) {
    this.running = true;
    const newLeft = $('.dancefloor').width() * Math.random();
    const newTop = $('.dancefloor').height() * Math.random();

    this.$node.animate({
      top: `${newTop}px`,
      left: `${newLeft}px`
    }, 2000);

    setTimeout(() => {
      this.running = false;
    }, 2000);
  }
};