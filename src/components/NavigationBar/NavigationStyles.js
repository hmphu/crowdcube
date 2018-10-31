import { Variables } from '../../constants/Variables';

export const NavigationStyles = {
  navigation: {
    width: '100%',
    borderBottom: `1px solid ${Variables.greyLine}`
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    width: 180
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-end'
  },
  regularButton: {
    appearance: 'none',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    border: `2px solid ${Variables.dark}`,
    borderRadius: 3,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  greenButton: {

  }
}