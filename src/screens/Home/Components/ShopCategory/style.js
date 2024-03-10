import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      margin: 15,
    },
    head: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      textAlign: 'center',
    },
    flatlist: {
      marginVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
      marginBottom: 15,
    },
    itemName: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black_level_1,
    },
    image: {
      width: 45,
      height: 45,
      resizeMode: 'contain',
    },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      padding: 15,
      marginBottom: 10,
    },
  });

export default style;
