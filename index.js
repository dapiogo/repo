const add = ({ x, y }) => {
  const b = x;
  const d = y;

  return b + d;
};

const reduce = (...res) => {
  return res.reduce((a, b) => a + b);
};
