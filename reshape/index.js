function reshape({ source, shape }) {
  const result = {};

  for (const key in shape) {
    if (key in shape) {
      const fn = shape[key];
      result[key] = source.map((state) => {
        const result = fn(state);
        return result === undefined ? null : result;
      });
    }
  }

  return result;
}

module.exports = { reshape };
