// This function returns true if a target string can be constructed from a given list of words

function canConstruct(target, words) {
  if (target === "") return true;

  for (let i = 0; i < words.length; i++) {
    if (target.startsWith(words[i])) {
      if (canConstruct(target.slice(words[i].length), words)) return true;
    }
  }

  return false;
}

console.log(
  canConstruct("skateboard", ["sk", "a", "ate", "bo", "te", "board"])
);
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(
  canConstruct("uncharacteristic", ["un", "charac", "ter", "isticc"])
);
console.log(
  canConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
    "aaaaaaaaaa",
  ])
);
