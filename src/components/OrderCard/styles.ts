import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    borderRadius: 16, // aplica borderRadius a todos
    overflow: 'hidden',
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
  },
  image: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },
  name: {
    fontSize: 20,
    marginTop: 21,
    color: '#29292E',
    fontFamily: 'sans-serif-medium',
  },
  description: {
    fontSize: 14,
    marginTop: 11,
    color: '#737380',
    fontFamily: 'sans-serif',
  },
  statusContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'sans-serif',
  },
});
