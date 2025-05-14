import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%', // ✅ Agora vai caber P, M, G lado a lado certinho
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1', // ajuste para sua cor theme.COLORS.SHAPE
    borderRadius: 12,
    paddingHorizontal: 8,
    marginBottom: 8,
    marginHorizontal: 4, // espaço entre P M G
  },
  size: {
    width: 70,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E1E1E1', // ajuste para theme.COLORS.SHAPE
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: '#29292E', // ajuste para theme.COLORS.SECONDARY_900
    fontFamily: 'DMSans_400Regular', // ajuste se usar outra fonte
  },
  input: {
    flex: 1,
    marginLeft: 29,
    fontSize: 14,
    color: '#29292E',
    fontFamily: 'DMSans_400Regular',
    width: 100,
  },
});
