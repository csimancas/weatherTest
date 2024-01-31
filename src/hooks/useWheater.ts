import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {weather_KEY} from '../utils/commons';

const useWeather = () => {
  const route = useRoute();
  const {item}: any = route.params;
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (lat: string, long: string) => {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&appid=${weather_KEY}`,
    );
    if (response.ok) {
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } else {
      console.error('Error al obtener el clima:', response.status);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (item) {
      getWeather(item.lat, item.long);
    }
  }, [item]);

  return {weather, loading, item};
};

export default useWeather;
