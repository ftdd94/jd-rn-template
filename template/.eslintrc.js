module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'import/order': ['warn', {'newlines-between': 'always-and-inside-groups'}],
    'react-native/no-inline-styles': 'off',
  },
};
