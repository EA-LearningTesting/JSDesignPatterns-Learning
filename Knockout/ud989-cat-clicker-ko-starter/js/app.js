var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.levels = ko.observable('baby');
  this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
  this.imgAttribution = ko.observable('asdasdas');


  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    if (this.clickCount() == 10) {
      this.levels('Infant');
    }
    if (this.clickCount() == 15) {
      this.levels('Teenager');
    }
    if (this.clickCount() == 21) {
      this.levels('Adult');
    }
    if (this.clickCount() == 31) {
      this.levels('Grown adult');
    }
    if (this.clickCount() == 31) {
      this.levels('old');
    }
  };


  this.nicknames = ko.observableArray(['nick1', 'nick2', 'nick3']);
};

ko.applyBindings(new ViewModel());
