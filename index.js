const add = ({ x, y }) => {
  const b = x;
  const d = y;
  const add2 = b + d;

  return b + d;
};

const reduce = (...res) => {
  return res.reduce((a, b) => a + b);
};
