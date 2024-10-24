function getSpaces(spaces, yes, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    if (yes[i] === "C" && today[i] === "C") {
      count = count + 1;
    }
  }
  return count;
}
console.log(getSpaces(5, "cc..c", "c.c.c"));
