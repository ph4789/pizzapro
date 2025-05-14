import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputPrimary: {
    width: '100%',
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 12,
    fontSize: 14,
    paddingVertical: 7,
    paddingLeft: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd', // theme.COLORS.SHAPE
    color: '#000', // theme.COLORS.SECONDARY_900
    fontFamily: 'DMSans_400Regular', // theme.FONT.TEXT
  },
  inputSecondary: {
    width: '100%',
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 12,
    fontSize: 14,
    paddingVertical: 7,
    paddingLeft: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#c1c1c1', // theme.COLORS.SHAPE
    color: '#000', // theme.COLORS.TITLE
    fontFamily: 'DMSans_400Regular',
  },
});
