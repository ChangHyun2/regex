import IO from "./IO";

IO.head("4. Qualifiers & Aliternation");

IO.head("plus");
// plus (한 개 또는 그 이상을 포함)
// Matches 1 or more of the preceding token.
IO.g("  sSSS  s   sSSSs  s".match(/s+/gi));

// star (포함하지 않거나 이상을 포함)
IO.head("star");
// Matches 0 or more of the preceding token.
IO.g("  sSSss  d  ddd  sdd  dss  asd  adds".match(/s*/gi));
IO.g("  sSSss  d  ddd  sdd  dss  asd  adds".match(/d*/gi));
IO.g("  sSSss  d  ddd  sdd  dss  asd  adds".match(/sd*/gi));
IO.g("  sSSss  d  ddd  sdd  dss  asd  adds".match(/ss*/gi));
IO.g("  sSSss  d  ddd  sdd  dss  asd  adds".match(/dd*/gi));

// optional or lazy

IO.head("optional");
// aaa는 aa / a로 해석
IO.g("  a  aa  aaa  ".match(/aa?/gi));
IO.g("aaa".match(/aa?/gi));

IO.head("lazy");
// 정규식은 기본적으로 그리디하게 해석하는데 lazy하게 끊어서 해석
IO.g("abacaabc".match(/a[a-z]*/gi));
IO.g("titanic".match(/t[a-z]*?i/gi));

// 한 문자열 전체를 그리디하게 탐색하던 걸
IO.g("acb    ab".match(/a.*b/gi));
// 끊어서 해석할 수 있음
IO.g("acb     ab".match(/a.*?b/gi));

IO.head("alternation");
IO.g("jpeg  jpg  png".match(/(jpe?g|png)/g));
IO.g("ja.jpg   go.jpeg   sibda.png".match(/[a-z].*?(jpe?g|png)/g));

// quantifier (앞에 오는 문자열의 개수 정하기)
// Matches the specified quantity of the previous token. {1,3} will match 1 to 3. {3} will match exactly 3. {3,} will match 3 or more.

IO.head("quantifier");
IO.g("aa  aaa  aaaa    aaaaa".match(/a{1,2}/g));
IO.g("abc  abcabc   abcabcabc".match(/(abc){1,2}/g));
IO.g("a aa aaa b bb bbb".match(/(a|b){1,3}/g));
IO.g("a aa aaa aaa".match(/aa{2,}/g));
IO.g("a aa aaa aaa".match(/(aa){2,}/g));
IO.g("a aa aaa aaa aaaa aaaaaa".match(/(aa){2}/g));
