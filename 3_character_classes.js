import IO from "./IO";

IO.head("3. Character classes");

// character set (문자열 중 하나)

IO.line();
IO.head("character set");
IO.g("abcde".match(/[a-b]/g));
IO.g("abc123de".match(/[b-c1-2]/g));

// negated set (포함하지 않는 것)

IO.line();
IO.head("negated");
IO.g("abcdebabcdsa".match(/[^abc]/g));
IO.g("abcdebcadbcde".match(/[^abcdef]/gi));

// word & not word (처음에 대문자인 줄..😅)

IO.head("word");
IO.g("oh ohoh oh oh".match(/\w/g));

IO.g("oh ohoh oh oh".match(/\W/g));
IO.g("oh ohoh OH OH".match(/\W/g));
IO.g("1 2 3 4 123".match(/\w/g));

// digit & not digit

IO.head("digit");
IO.g("12341".match(/\d/g));

IO.g("aaa  111".match(/\D/g));

// whitespace & not whitespace

IO.head("whitespace"); // spacing s?
IO.g("a  a a  ".match(/\s/g));

IO.g("a  a a  ".match(/\S/g));
