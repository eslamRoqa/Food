import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from './component/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
      <Text>{term}</Text>
    </View>
  );
};

const style = StyleSheet.create();

export default SearchScreen;
