import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Meals from '../api/Meals';

const DetailsScreen = ({route}) => {
  const id = route.params.idKey;
  const [errorMessage, setMessageError] = useState('');
  const [result, setResult] = useState('');

  const getResult = async id => {
    try {
      const response = await Meals.get('/lookup.php', {
        params: {
          i: id,
        },
      });

      response.data.meals.map(item => {
        console.log(item.idMeal);
        setResult(item);
      });
    } catch (err) {
      setMessageError(err);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  console.log('itemId ' + result.idMeal);
  return (
    <View>
      <ScrollView>
        <Text style={styles.title}> {result.strMeal}</Text>
        {result.strMealThumb != null ? (
          <Image style={styles.image} source={{uri: result.strMealThumb}} />
        ) : null}
        <Text style={styles.instructions}> {result.strInstructions}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
  },
  instructions: {
    margin: 8,
    fontSize: 16,
    color: 'black',
  },
});

export default DetailsScreen;
