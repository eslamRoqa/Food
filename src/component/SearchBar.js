import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={style.backgroundStyle}>
      <Icon
        name="search"
        size={30}
        color="black"
        style={style.backgroundIcon}
      />
      <TextInput
        placeholder="Search"
        style={style.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: 'gray',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
  },
  backgroundIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
