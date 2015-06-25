var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.levels = ko.observable('baby');
  this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
  this.imgAttribution = ko.observable('asdasdas');

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 50) {
      title = 'Infant';
    } else if (clicks < 100) {
      title = 'Child';
    } else if (clicks < 500) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  }, this);

  this.nicknames = ko.observableArray(['nick1', 'nick2', 'nick3']);
};

var ViewModel = function() {
  var self = this;
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
