import {useState, useEffect} from 'react';
import Meals from '../api/Meals';

export default () => {
  const [result, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const mealz = async searchTerm => {
    try {
      const response = await Meals.get('/search.php', {
        params: {
          s: searchTerm,
        },
      });
      setResults(response.data.meals);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    mealz('beef');
  }, []);

  return [mealz, result, errorMessage];
};
