const reverse = str => {
  if (str.length <= 1) return str;
  console.log(str);
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse("catalogue"));
