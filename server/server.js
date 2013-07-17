
const Q3_CORRECT_ANSWER = null;

const QER_COORDS =
[{"recipient":"kamil@q42.nl","time":"0:34","dirs":["Suzanne@E","Christiaan@S"]},
{"recipient":"suzanne@q42.nl","time":"0:34","dirs":["Kamil@W"]},
{"recipient":"christiaan@q42.nl","time":"0:34","dirs":["Wilbert@E","Kamil@N"]},
{"recipient":"wilbert@q42.nl","time":"0:34","dirs":["Arian@SW","Christiaan@W"]},
{"recipient":"arian@q42.nl","time":"0:34","dirs":["Wilbert@NE"]},
{"recipient":"korjan@q42.nl","time":"1:18","dirs":["RAHUL@SE","GERARD@S"]},
{"recipient":"gerard@q42.nl","time":"1:18","dirs":["RAHUL@E","JOHAN@SE","JASPERH@S","KORJAN@N"]},
{"recipient":"rahul@q42.nl","time":"1:18","dirs":["GERARD@W","KORJAN@NW"]},
{"recipient":"jasperh@q42.nl","time":"1:18","dirs":["GERARD@N"]},
{"recipient":"johan@q42.nl","time":"1:18","dirs":["GERARD@NW"]},
{"recipient":"tom@q42.nl","time":"2:28","dirs":["richard@SE"]},
{"recipient":"bob@q42.nl","time":"2:28","dirs":["richard@S"]},
{"recipient":"richard@q42.nl","time":"2:28","dirs":["leonard@SW","tom@NW","bob@N"]},
{"recipient":"leonard@q42.nl","time":"2:28","dirs":["richard@NE"]},
{"recipient":"remco@q42.nl","time":"3:16","dirs":["SANDER@S"]},
{"recipient":"sjoerd@q42.nl","time":"3:16","dirs":["SANDER@SW"]},
{"recipient":"sander@q42.nl","time":"3:16","dirs":["ROELFJAN@SE","HUIB@S","REMCO@N","SJOERD@NE"]},
{"recipient":"huib@q42.nl","time":"3:16","dirs":["SANDER@N"]},
{"recipient":"roelfjan@q42.nl","time":"3:16","dirs":["SANDER@NW"]},
{"recipient":"tims@q42.nl","time":"4:34","dirs":["JaapM@SE"]},
{"recipient":"jaap@q42.nl","time":"4:34","dirs":["JaapM@E","Matthijs@S"]},
{"recipient":"jaapm@q42.nl","time":"4:34","dirs":["Jaap@W","TimS@NW"]},
{"recipient":"matthijs@q42.nl","time":"4:34","dirs":["MartijnL@E","Jaap@N"]},
{"recipient":"martijnl@q42.nl","time":"4:34","dirs":["Matthijs@W"]},
{"recipient":"cynthia@q42.nl","time":"5:20","dirs":["michiel@S"]},
{"recipient":"timvd@q42.nl","time":"5:20","dirs":["michiel@SW"]},
{"recipient":"michiel@q42.nl","time":"5:20","dirs":["arjen@SE","guus@S","cynthia@N","timvd@NE"]},
{"recipient":"guus@q42.nl","time":"5:20","dirs":["michiel@N"]},
{"recipient":"arjen@q42.nl","time":"5:20","dirs":["michiel@NW"]},
{"recipient":"laurens@q42.nl","time":"6:43","dirs":["marcel@SE"]},
{"recipient":"katja@q42.nl","time":"6:43","dirs":["stef@SE","marcel@SW"]},
{"recipient":"benjamin@q42.nl","time":"6:43","dirs":["stef@SW"]},
{"recipient":"marcel@q42.nl","time":"6:43","dirs":["laurens@NW","katja@NE"]},
{"recipient":"stef@q42.nl","time":"6:43","dirs":["katja@NW","benjamin@NE"]},
{"recipient":"jasper@q42.nl","time":"7:29","dirs":["Mark@E","Tim@S"]},
{"recipient":"mark@q42.nl","time":"7:29","dirs":["Jasper@W"]},
{"recipient":"tim@q42.nl","time":"7:29","dirs":["Chris@E","Jasper@N"]},
{"recipient":"chris@q42.nl","time":"7:29","dirs":["Martin@SW","Tim@W"]},
{"recipient":"martin@q42.nl","time":"7:29","dirs":["Chris@NE"]},
{"recipient":"martijn@q42.nl","time":"8:24","dirs":["LUKAS@S"]},
{"recipient":"bas@q42.nl","time":"8:24","dirs":["RIK@S"]},
{"recipient":"lukas@q42.nl","time":"8:24","dirs":["RIK@E","ELAINE@S","MARTIJN@N"]},
{"recipient":"rik@q42.nl","time":"8:24","dirs":["JEROEN@S","LUKAS@W","BAS@N"]},
{"recipient":"elaine@q42.nl","time":"8:24","dirs":["LUKAS@N"]},
{"recipient":"jeroen@q42.nl","time":"8:24","dirs":["RIK@N"]},
{"recipient":"elaine@q42.nl","time":"9:56","dirs":["christiaan@S"]},
{"recipient":"guus@q42.nl","time":"9:56","dirs":["martin@S"]},
{"recipient":"christiaan@q42.nl","time":"9:56","dirs":["martin@E","elaine@N"]},
{"recipient":"martin@q42.nl","time":"9:56","dirs":["christiaan@W","guus@N"]},
{"recipient":"benjamin@q42.nl","time":"10:20","dirs":["Martijn@S","JaapM@SW"]},
{"recipient":"jaapm@q42.nl","time":"10:20","dirs":["Martijn@E","Benjamin@NE"]},
{"recipient":"martijn@q42.nl","time":"10:20","dirs":["JasperH@S","JaapM@W","Benjamin@N"]},
{"recipient":"jasperh@q42.nl","time":"10:20","dirs":["Martijn@N"]}]
;

const QER_POSITIONS = [{"recipient":"lukas@q42.nl","position":{"x":377.492,"y":200,"z":0}},
{"recipient":"roelfjan@q42.nl","position":{"x":242.647,"y":200,"z":289.175}},
{"recipient":"jasper@q42.nl","position":{"x":410,"y":120,"z":0}},
{"recipient":"huib@q42.nl","position":{"x":403.771,"y":120,"z":71.196}},
{"recipient":"christiaan@q42.nl","position":{"x":263.543,"y":120,"z":314.078}},
{"recipient":"arjen@q42.nl","position":{"x":425.323,"y":40,"z":0}},
{"recipient":"matthijs@q42.nl","position":{"x":399.673,"y":40,"z":145.469}},
{"recipient":"suzanne@q42.nl","position":{"x":273.393,"y":40,"z":325.817}},
{"recipient":"martijn@q42.nl","position":{"x":425.323,"y":-40,"z":0}},
{"recipient":"timvd@q42.nl","position":{"x":368.341,"y":-40,"z":212.662}},
{"recipient":"guus@q42.nl","position":{"x":273.393,"y":-40,"z":325.817}},
{"recipient":"sjoerd@q42.nl","position":{"x":410,"y":-120,"z":0}},
{"recipient":"laurens@q42.nl","position":{"x":314.078,"y":-120,"z":263.543}},
{"recipient":"gerard@q42.nl","position":{"x":263.543,"y":-120,"z":314.078}},
{"recipient":"kamil@q42.nl","position":{"x":377.492,"y":-200,"z":0}},
{"recipient":"remco@q42.nl","position":{"x":242.647,"y":-200,"z":289.175}},
{"recipient":"bob@q42.nl","position":{"x":-242.647,"y":200,"z":289.175}},
{"recipient":"richard@q42.nl","position":{"x":-289.175,"y":200,"z":242.647}},
{"recipient":"katja@q42.nl","position":{"x":-205,"y":120,"z":355.07}},
{"recipient":"rahul@q42.nl","position":{"x":-355.07,"y":120,"z":205}},
{"recipient":"rik@q42.nl","position":{"x":-212.662,"y":40,"z":368.341}},
{"recipient":"leonard@q42.nl","position":{"x":-368.341,"y":40,"z":212.662}},
{"recipient":"elaine@q42.nl","position":{"x":-212.662,"y":-40,"z":368.341}},
{"recipient":"jaapm@q42.nl","position":{"x":-368.341,"y":-40,"z":212.662}},
{"recipient":"marcel@q42.nl","position":{"x":-205,"y":-120,"z":355.07}},
{"recipient":"tim@q42.nl","position":{"x":-355.07,"y":-120,"z":205}},
{"recipient":"stef@q42.nl","position":{"x":-242.647,"y":-200,"z":289.175}},
{"recipient":"michiel@q42.nl","position":{"x":-289.175,"y":-200,"z":242.647}},
{"recipient":"jasperh@q42.nl","position":{"x":-188.746,"y":200,"z":-326.917}},
{"recipient":"jeroen@q42.nl","position":{"x":-129.11,"y":200,"z":-354.726}},
{"recipient":"chris@q42.nl","position":{"x":-65.551,"y":200,"z":-371.757}},
{"recipient":"jaap@q42.nl","position":{"x":0,"y":200,"z":-377.492}},
{"recipient":"tims@q42.nl","position":{"x":-205,"y":120,"z":-355.07}},
{"recipient":"korjan@q42.nl","position":{"x":71.196,"y":120,"z":-403.771}},
{"recipient":"benjamin@q42.nl","position":{"x":-212.662,"y":40,"z":-368.341}},
{"recipient":"johan@q42.nl","position":{"x":73.857,"y":40,"z":-418.862}},
{"recipient":"sander@q42.nl","position":{"x":-212.662,"y":-40,"z":-368.341}},
{"recipient":"wilbert@q42.nl","position":{"x":-145.469,"y":-40,"z":-399.673}},
{"recipient":"martijnl@q42.nl","position":{"x":-73.857,"y":-40,"z":-418.862}},
{"recipient":"arian@q42.nl","position":{"x":0,"y":-40,"z":-425.323}},
{"recipient":"tom@q42.nl","position":{"x":-205,"y":-120,"z":-355.07}},
{"recipient":"mark@q42.nl","position":{"x":0,"y":-120,"z":-410}},
{"recipient":"bas@q42.nl","position":{"x":-188.746,"y":-200,"z":-326.917}},
{"recipient":"martin@q42.nl","position":{"x":65.551,"y":-200,"z":-371.757}}];

//var letters = "EenskijkenofRahulditmetscriptgaatoplossen!".toLowerCase();
var letters = "HetQuitjeisnietinBarcelona,maarinBrighton!".toLowerCase();
var sortedLetters = letters.replace(/[bnor]/g, "").split("").sort();

Coords = new Meteor.Collection("coords");
Letters = new Meteor.Collection("letters");

Meteor.startup(function() {

  Coords.remove({});
  //Letters.remove({});

  if (Letters.find().count() == 0) {
    _.each(letters, function(letter, i) {
      var isKnown = _.contains("bnor".split(""), letter);
      if (isKnown)
        Letters.insert({number: i + 1, value: letter, fixed: true});
      else {
        var l = sortedLetters.shift();
        Letters.insert({number: i + 1, value: l, fixed: false});
      }
    });
  }

  /*if (Coords.find().count() == 0) {
    _.each(QER_COORDS, function(item) {
      Coords.insert({email: item.recipient, targets: item.dirs, time: item.time });
    });
  }

  _.each(QER_POSITIONS, function(item) {
    var user = Meteor.users.findOne({'services.google.email': item.recipient});
    if (!user || user.q5MailSent)
      return;

    Email.send({
      from: "Voorspel <voorspel@q42.nl>",
      to: item.recipient,
      subject: "TRIANGULATING...",
      text: "POSITIONING ALIGNMENT MATRIX FOR LANDING. COORDINATES AVAILABLE. PLEASE NAVIGATE.",
      headers: {
        "Q-Position-X": item.position.x,
        "Q-Position-Y": item.position.y,
        "Q-Position-Z": item.position.z
      }
    });
    Meteor.users.update({'services.google.email': item.recipient}, {$set: {q5MailSent: true}});
  });*/

});

Meteor.methods({
  // SUM OF PREVIOUS ANSWER AND LIECHTENSTEIN AND BELGIUM
  answerq3: function(value) {
    value = value.toLowerCase();
    if (value == "puerto rico" || value == "pr") {
      Meteor.users.update(this.userId, {$set: {answeredQuestion3: true}});
      return "Yep";
    }
    else
      return "Nope";
  },
  // B
  answerq4: function(value) {
    if (value.toLowerCase() == "b") {
      Meteor.users.update(this.userId, {$set: {answeredQuestion4: true}});
      return "R";
    }
    else if (value.toLowerCase() == "q") {
      Meteor.users.update(this.userId, {$set: {answeredQuestion4: false}});
      return "42";
    }
    else {
      Meteor.users.update(this.userId, {$set: {answeredQuestion4: false}});
      return String.fromCharCode(65 + Math.random() * 26);
    }
  },
  // R O N
  answerq5: function(value) {
    value = value.toLowerCase();
    if (value.length == 3 && value.indexOf("n") > -1 && value.indexOf("o") > -1 && value.indexOf("r") > -1) {
      Meteor.users.update(this.userId, {$set: {answeredQuestion5: true}});
      return "!";
    } else {
      Meteor.users.update(this.userId, {$set: {answeredQuestion5: false}});
      return "?";
    }
  },
  answerq6: function(value) {
    if (Letters.find({fixed: false}).count() > 0) return false;

    var correct = value.toLowerCase() == "brighton";
    if (correct)
      Meteor.users.update(this.userId, {$set: {answeredQuestion6: true, completionDate: new Date()}});
    return correct;
  },
  updatePosition: function(x, y, z) {
    if (!this.userId)
      return;
    Meteor.users.update(this.userId, {$set: {'position.x': x, 'position.y': y, 'position.z': z}});
  },
  fixLetter: function(index, value) {
    if (!Meteor.user()) return false;
    console.log("fixLetter", index, value, letters[index - 1] == value);
    // clicked on a letter that should be in this position
    if (letters[index - 1] == value) {
      var existingLetter = Letters.findOne({number: index});
      if (existingLetter) {
        if (existingLetter.fixed) return false;
        var existingValue = existingLetter.value;

        Letters.update({number: index}, {$set: {value: value, fixed: true, guessedBy: Meteor.user().profile.name}});

        var newLetter = Letters.findOne({value: value, fixed: {$ne: true}});
        if (newLetter)
          Letters.update({number: newLetter.number}, {$set: {value: existingValue}});
      }
      else
        Letters.update({number: index}, {$set: {value: value, fixed: true, guessedBy: Meteor.user().profile.name}});

      return true;
    }

    // wrong! unset a fixed letter (but not beyond the default state)
    Letters.update({fixed: true, value: /[^bnor]/i}, {$set: {fixed: false}});

    return false;
  }
});

Meteor.publish("allUserData", function () {
  return Meteor.users.find({}, {fields: {profile: 1, position: 1}});
});

Meteor.publish("extraUserInfo", function() {
  return Meteor.users.find(this.userId, { fields: { answeredQuestion2: 1, answeredQuestion3: 1} });
});

Meteor.publish("letters", function() {
  return Letters.find();
})

/*Meteor.publish("coords", function() {
  var user = Meteor.users.findOne(this.userId);
  if (user) {
    var email = user.services.google.email;
    return Coords.find({email: email});
  }
  return null;
});*/


Meteor.Router.add(/^((?!\/barcelona).)*$/, function() {
  var str = "<span style=\"font-family:monospace\">4 0 4 N O T F&nbsp;&nbsp;&nbsp;O U N D"+
  "<br><br>! E M ! H U I&nbsp;&nbsp;&nbsp;Q , U E I C <b>A</b>&nbsp;&nbsp;&nbsp;T T I I J T I"+
  "<br>T A A A N H H&nbsp;&nbsp;&nbsp;T A I J N E T&nbsp;&nbsp;&nbsp;H I E C N A S"+
  "<br>! A N <b>B</b> H R I&nbsp;&nbsp;&nbsp;T , N B T R T&nbsp;&nbsp;&nbsp;I I N B , <b>R</b> S"+
  "<br>I I O N A E L&nbsp;&nbsp;&nbsp;, E O N I I S&nbsp;&nbsp;&nbsp;I E O N H T I"+
  "<br>I H R I N B R&nbsp;&nbsp;&nbsp;C E R ! N B R&nbsp;&nbsp;&nbsp;T C R I N B R"+
  "<br>A M E L O N I&nbsp;&nbsp;&nbsp;H T A E O N E&nbsp;&nbsp;&nbsp;I S C T O N I"+
  "<br>"+
  "<br>T I ! <b>C</b> E I A&nbsp;&nbsp;&nbsp;A I I S T M C&nbsp;&nbsp;&nbsp;! A I E I E C"+
  "<br>E A E T N ! L&nbsp;&nbsp;&nbsp;M A U , N A A&nbsp;&nbsp;&nbsp;A H E A N U E"+
  "<br>I I N B L R A&nbsp;&nbsp;&nbsp;I T N B U R M&nbsp;&nbsp;&nbsp;M <b>L</b> N B E R H"+
  "<br>I I O N H I I&nbsp;&nbsp;&nbsp;H A O N I H !&nbsp;&nbsp;&nbsp;I I O N A J M"+
  "<br>I I R A N B R&nbsp;&nbsp;&nbsp;I E R H N B R&nbsp;&nbsp;&nbsp;T I R U N B R"+
  "<br>T E I I O N A&nbsp;&nbsp;&nbsp;I <b>E</b> A A O N S&nbsp;&nbsp;&nbsp;S C Q E O N M"+
  "<br>"+
  "<br>E H A S M A S&nbsp;&nbsp;&nbsp;I I T ! T M M&nbsp;&nbsp;&nbsp;U ! I E U U !"+
  "<br>A E E E N I G&nbsp;&nbsp;&nbsp;L E E A N T E&nbsp;&nbsp;&nbsp;J T H H N I H"+
  "<br>E I N B U R J&nbsp;&nbsp;&nbsp;S ! N B A R I&nbsp;&nbsp;&nbsp;C ! N B T R !"+
  "<br>I T <b>O</b> N E M M&nbsp;&nbsp;&nbsp;E A O N L G A&nbsp;&nbsp;&nbsp;E A O N I T J"+
  "<br>L E R G N B R&nbsp;&nbsp;&nbsp;I I R I <b>N</b> B R&nbsp;&nbsp;&nbsp;H L R T N B R"+
  "<br>A U A T O N T&nbsp;&nbsp;&nbsp;T A T G O N E&nbsp;&nbsp;&nbsp;S T H I O N <b>A</b></span>";
  return [404, {'Content-Type': 'text/html'}, str]
});