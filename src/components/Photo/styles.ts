import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  placeholder: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#000', // SECONDARY_900
  },
  placeholderTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'red', // SECONDARY_900
    fontFamily: 'DMSans_400Regular', // FONT.TEXT
  },
});
