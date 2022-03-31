var arrayString = ["Hello", "World", "Happy", "Sad", "Day", "Fun", "Nice", "Fire", "Water"];
var randString = "";

for (var i = 0; i < 5; i++) {
    var index = Math.floor(Math.random() * arrayString.length);
    randString += arrayString[index].toLowerCase() + " ";
}

console.log(randString);
