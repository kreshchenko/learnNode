var phrases = require("./ru.json");

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  console.log(phrases.hello + who.name);
};

console.log(module);

exports.User = User;
