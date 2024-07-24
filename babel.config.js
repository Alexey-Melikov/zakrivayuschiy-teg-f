const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: "3.37.1",
      shippedProposals: true,
      targets: {
        edge: "17",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },
      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };
