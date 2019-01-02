function specialSymbol(str) {
  var output = false;
  for (var i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      if ((str[i - 1] === "+") && (str[i + 1] === "+")) { output = true; } else output = false
    }
  }return output
}
specialSymbol("+=+A+=+=");
