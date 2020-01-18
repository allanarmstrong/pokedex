export const leadingZeroes = number => {
  var s = number + "";
  while (s.length < 3) s = "0" + s;
  return s;
};

export const capitalise = name =>
  name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
