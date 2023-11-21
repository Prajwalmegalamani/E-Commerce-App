export function TitleCase(str) {
  return str
    .toString()
    .toLowerCase()
    .split(/[- ]+/)
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}
