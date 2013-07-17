if (Meteor.isClient) {

  Coords = new Meteor.Collection("coords");
  Letters = new Meteor.Collection("letters");

  //Meteor.subscribe("coords");
  Meteor.subscribe("allUserData");
  Meteor.subscribe("extraUserInfo");
  Meteor.subscribe("letters");

  Template.body.helpers({
    q3: function() {
      return !!Meteor.user();
    },
    q4: function() {
      return !!Meteor.user();
    },
    q5: function() {
      return !!Meteor.user();
    },
    q6: function() {
      return !!Meteor.user();
    }
  });

  Template.body.coord = function() {
    return Coords.find();
  }

  Template.body.target = function() {
    return this.targets;
  }



  Template.targetedArea.letter = function() {
    return Letters.find({}, {sort: {number: 1}});
  }
  Template.letter.rendered = function() {
    if (this.data.fixed) return;
    var otherLetters = Letters.find({fixed: {$not: true}}).fetch();
    if (!otherLetters) return;
    var newLetter = otherLetters[_.random(otherLetters.length - 1)].value;
    $(this.find(".letter")).text(newLetter);
  }
  Template.letter.fixed = function() {
    return this.fixed ? " fixed" : "";
  }

  Template.body.inputActive = function() {
    return Letters.find({fixed: false}).count() == 0;
  }





  Template.body.direction = function() {
    return this.split("@")[1].toLowerCase();
  }

  Template.body.person = function() {
    return this.split("@")[0];
  }

  /*Template.body.x = function() { if (!Meteor.user() || !Meteor.user().position) return; return Math.round(Meteor.user().position.x); }
  Template.body.y = function() { if (!Meteor.user() || !Meteor.user().position) return; return Math.round(Meteor.user().position.y); }
  Template.body.z = function() { if (!Meteor.user() || !Meteor.user().position) return; return Math.round(Meteor.user().position.z); }
  Template.body.xyz = function() {
    if (!Meteor.user() || !Meteor.user().position) return;
    return Math.round(Meteor.user().position.x * Meteor.user().position.y * Meteor.user().position.z);
  }*/

  Template.body.rendered = function() {
    $("#input-message input").focus();

    /*if (!Meteor.user()) {
      $("body").addClass("warp");
      $("body").addClass("starfield");

      var $stars = $("#stars");
      $stars.html("");
      var ww = $(window).width();
      var wh = $(window).height();
      for (var i = 0; i < 100; i++) {
        var $star = $('<div class="star"></div>');
        $star.css("top", ~~(Math.random() * wh));
        $star.css("left", ~~(Math.random() * ww));
        $star[0].style.webkitAnimation = "infinite alternate glowstar 4s " + ~~(Math.random() * -20) + "s";
        $stars.append($star);
      }
    }*/
  }

  Template.body.events({
    "keyup #input-message input": function(evt) {
      if (evt.which == 13) {
        Meteor.call("answerq6", $(evt.target).val(), function(error, result) {
          if (result === true) {
            window.location.href = "/win.png";
          }
          else {
            new Audio("/trombone.mp3").play();
          }
        });
      }
    }
  });

  Template.letter.events({
    "click": function(evt) {
      var $el = $(evt.target);
      Meteor.call("fixLetter", $el.data("index"), $el.text(), function(err, result) {
        console.log("result", result);
        if (result === false) {
          new Audio("/bzzzt.mp3").play();
          $el.addClass("wobble");
          Meteor.setTimeout(function() {
            $el.removeClass("wobble");
          }, 600);
        }
        else {
          new Audio("/yay.mp3").play();
        }
      });
    }
  });

}