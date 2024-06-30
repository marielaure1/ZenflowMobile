const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname, {
    isCSSEnabled: true, 
  });

const config = withNativeWind(defaultConfig, {
  input: "./theme/global.css", 
  outputDir: "./theme"
});

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-sass-transformer"),
  },
  resolver: {
    ...config.resolver,
    sourceExts: [...config.resolver.sourceExts, "scss", "sass"],
  },
};
