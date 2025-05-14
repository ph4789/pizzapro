import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 104,
    height: 104,
    borderRadius: 52,
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  identification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Times New Roman',
  },
  description: {
    fontSize: 12,
    color: '#000',
    lineHeight: 20,
    marginRight: 21,
    fontFamily: 'Times New Roman',
  },
  line: {
    width: '100%',
    height: 1,
    marginVertical: 12,
    marginLeft: 124,
    backgroundColor: '#e5e5e5',
  },
});
