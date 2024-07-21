import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from '../component/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../component/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [mealz, results, errorMessage] = useResults();

  const filterByCountry = country => {
    return results.filter(result => {
      return result.strArea === country;
    });
  };

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => mealz(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results ? <Text>We have {results.length} results</Text> : null}
      <ScrollView>
        <ResultList
          results={filterByCountry('Chinese')}
          title="Chinese"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('Malaysian')}
          title="Malaysian"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('Filipino')}
          title="Filipino"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('British')}
          title="British"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('Russian')}
          title="Russian"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('French')}
          title="French"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('Italian')}
          title="Italian"
          navigation={navigation}
        />
        <ResultList
          results={filterByCountry('Mexican')}
          title="Mexican"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginBottom: 90,
  },
});

export default SearchScreen;
