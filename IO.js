const _IO = {
  keys: (obj) => {
    console.log(Object.keys(obj));
  },
  head: (str) => {
    console.log(`---------------- ${str} ----------------`);
  },
  g: () => console.log(g, "\n"),
  line: (str) => {
    console.log(`${str}\n`);
  },
  error: (str) => {
    console.error(str);
  },
  prompt: (str) => {
    console.log(`> ${str}`);
  },
};

export default _IO;
