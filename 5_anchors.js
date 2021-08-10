import IO from "./IO";

IO.head("5. anchor");

IO.head("beginning");
IO.g(/^a/.test("a___"));
IO.g(/^a/.test("_a___"));
IO.g(/^a/g.test("_a___"));
IO.g(/[^ab_]/g.test("_a___")); // character classes로 사용할 경우 negated set이 됨
IO.g(/^[a_]/.test("_a___")); // character classes로 사용할 경우 negated set이 됨

IO.head("end");
IO.g(/a$/.test("__a"));
IO.g(/a$/.test("a"));
