var Light = function(left, top, timer) {
  this.$node = $('<span class="light"></span>');
  this.timer = timer;
  this.setPosition(top, left);
  this.fadeInLight();
};

Light.prototype.fadeInLight = function() {
  this.$node.fadeIn(this.timer, () => this.fadeOutLight());
};

Light.prototype.fadeOutLight = function() {
  this.$node.fadeOut(this.timer, () => this.fadeInLight());
};

Light.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


