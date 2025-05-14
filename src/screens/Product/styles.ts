// styles.ts
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    backgroundColor: '#b83341',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 33,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  priceRow: {},
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
  uploadContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  uploadButton: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#E03F50',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 32,
    maxWidth: 90,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  form: {
    width: '100%',
    padding: 24,
  },
  label: {
    marginBottom: 12,
    fontSize: 14,
    color: '#29292E',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  inputGroupHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  maxCharacters: {
    fontSize: 11,
    color: '#29292E',
  },
  // MUDANÇA AQUI
  priceColumn: {
    flexDirection: 'column', // Agora é coluna, não row
    gap: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
});
