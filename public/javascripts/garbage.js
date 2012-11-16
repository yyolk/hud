function genGarbage(){

  var key ="", random;
  var letters = "abcdefghijklmnopqrstuvwxyz ";
  random = Math.floor(Math.random() * letters.length);
  key += letters.charAt(random);
  return key;
}


function showGarbage(){

  var current = document.getElementById("miniwindow").innerHTML;
  current += genGarbage();
  document.getElementById("miniwindow").innerHTML = current;

}

setInterval("showGarbage()", 10);
