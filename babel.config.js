module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          // e por aí vai...
        },
      },
    ],
    'react-native-reanimated/plugin', // <- SEMPRE por último!
  ],
};
