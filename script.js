var nimi = new Array(10);

for (var i = 0; i < nimi.length; i++) {
  var input = prompt('Syötä nimi ' + (i + 1) + ' of ' + (nimi.length));
  document.getElementById("print").innerHTML += i + 1 + ". " + input + "<br>";
}