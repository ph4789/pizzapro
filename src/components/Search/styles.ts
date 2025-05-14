import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -30,
    paddingHorizontal: 24,
  },
  inputArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    height: 52,
    paddingLeft: 12,
    fontFamily: 'System', // Use o que você preferir, tipo 'DMSans-Regular' se tiver carregado
    fontSize: 16,
    color: '#000',
  },
  buttonClear: {
    marginRight: 7,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6366F1', // Azul bonito, pode trocar
    marginLeft: 7,
  },
});
