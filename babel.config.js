module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      ["nativewind/babel"],
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.scss', '.sass'],
          alias: {
            '@': './',
            '@api': './api',
            '@icons': './assets/icons',
            '@img': './assets/images',
            '@components': './components',
            '@widgets': './widgets',
            '@config': './config',
            '@hooks': './common/hooks',
            '@app': './app',
            '@screens': './screens',
            '@navigators': './navigators',
            '@stores': './stores',
            '@theme': './theme',
            '@interfaces': './common/interfaces',
          },
        },
      ],
    ]
  };
};
