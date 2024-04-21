module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@': '.',
          '@api': './src/api',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@components': './src/components',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}