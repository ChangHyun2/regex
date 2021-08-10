import IO from "./IO";

IO.head("6. lookaround");

IO.head("positive lookahead");
IO.g("1ps 2px 3em 4px".match(/\d(?!px)/g));
IO.g("1ps 2px 3em 4px".match(/\d(?=px)/g));
IO.g("1ps1ps 2px2px 3em3em 4px4px 4px 3em4px".match(/\d(?=px)/g));

IO.g("apple applepie app".match(/ap(?!ple)/g));
IO.g("apple applepie app appapp".match(/\w+(?!app$)(?=\w{2})/g));
