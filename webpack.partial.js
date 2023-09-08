module.exports = {
  module: {
    rules: [
      {
        test: /\.(txt|md)$/,
        type: 'asset/source'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      }
    ]
  }
};
