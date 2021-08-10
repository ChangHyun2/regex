import IO from "./IO";

IO.line();
IO.head("2. Flags");

// 1. i (대소문자 구분 x)
IO.g("abcABC".match(/[a-c]/gi));

// 2. g (global)

// 3. m (multiline)

// 4. u (unicode)

// 5. y (sticky)

// 6. s (dotall)

// unicode (브라우저 지원 x)
const uni = String.fromCodePoint(parseInt("a", 16));
console.log(uni);
