import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ResultDetails from './ResultDetails';

const ResultList = ({title, results, navigation}) => {
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Result: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.idMeal}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailsScreen', {idKey: item.idMeal})
              }>
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    color: 'black',
    marginStart: 16,
  },
  container: {
    marginBottom: 8,
  },
});

export default ResultList;
