import {Image, StyleSheet, Text, View} from 'react-native';

const ResultDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.strMealThumb}} style={styles.imageStyle} />
      <Text style={styles.titleStyle}>{result.strMeal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 4,
  },
  titleStyle: {
    fontSize: 14,
    fontFamily: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});

export default ResultDetails;
