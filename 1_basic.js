import IO from "./IO";

IO.head("기본 메소드");

// --- TEST METHOD ---
IO.head("regex.test(string) : regex로 string을 test하고 boolean값 리턴");

IO.g(/search/.test("search somsething"));
IO.g(/search/.test("something search"));

// --- MATCH METHOD ---
IO.head("string.match(regex) : string에서 regex에 매칭되는 것만 추출\n");

IO.g("search something search something".match(/search/));

IO.g("search search search search".match(/search/g));

IO.g("hum hus hup ".match(/hu./g));
IO.g("shum phus phum".match(/.hu/g));
IO.g("shum phus phum".match(/.hu./g));
IO.g("shum phus phu\\".match(/.hu./g));

IO.g("bad bud bid baid baiud".match(/b[aiu]d/g));

IO.g("abcdefghi".match(/[c-e]/g));
