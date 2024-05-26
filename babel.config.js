module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './',
            '@api': './api',
            '@icons': './assets/icons',
            '@img': './assets/images',
            '@components': './components',
            '@config': './config',
            '@hooks': './hooks',
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
