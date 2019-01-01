function letterChanges(arr) {
  var newLetters = [];
  arrLetters = arr.split("");
  arrLetters.forEach(function (element) {
    if (element === "z") {
      newLetters.push("a");
    } else if ((element < "z") && (element >= "a")) {
      newLetters.push(String.fromCharCode(element.charCodeAt(0) + 1));
    } else { newLetters.push(element) }
  });
  console.log(newLetters);
  for (var i = 0; i < newLetters.length; i++) {
    if (newLetters[i] === "a" || newLetters[i] === "e" || newLetters[i] === "i" || newLetters[i] === "o" || newLetters[i] === "u") {
      newLetters[i] = newLetters[i].toUpperCase();
    }
  } 
  return newLetters.join("");
}


letterChanges("fun times!");
