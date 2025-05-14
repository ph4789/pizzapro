import {StyleSheet} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {Button} from '../../components/Button';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    color: '#000',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B83341', // apenas uma cor (gradiente só com expo-linear-gradient)
    paddingTop: getStatusBarHeight() + 33,
    paddingHorizontal: 24,
    paddingBottom: 58,
    color: '#000',
    fontWeight: 'bold',
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingEmoji: {
    height: 32,
    width: 32,
    marginRight: 12,
  },
  greetingText: {
    fontSize: 20,
    color: '#fff', // substituindo theme.COLORS.SECONDARY_900
    fontFamily: 'DMSans_400Regular', // atenção: precisa estar carregado no projeto
  },
  MenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 24,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  MenuItemNumber: {
    fontSize: 14,
    color: '#000', // cor equivalente ao SECONDARY_900 se quiser mudar
    fontFamily: 'System', // ou 'DMSans-Regular' se você tiver a fonte carregada
  },

  Title: {
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'System', // ou 'DMSans-Regular' se você tiver a fonte carregada
    color: '#000', // cor equivalente ao SECONDARY_900 se quiser mudar
  },

  button: {
    marginHorizontal: 24,
    marginBottom: getBottomSpace() + 12,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    width: '80%',
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#B83341',
  },
  // list: {
  //   backgroundColor: '#000',
  //   color: '#000',
  // },
  // export const newProductButton = styled(Button)`
  //   margin: 0 24px;
  //   margin-bottom: ${getBottomSpace() + 12}px;

  // `
});

// <NewProductButton
//   title = "Cadastrar pizza"
//   color= "#ddd"
//   onPress= {handleAdd}
// />
