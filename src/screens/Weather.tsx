import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import useWeather from '../hooks/useWheater';
import WeatherDetail from '../components/WeatherDetail';
import DailyWeather from '../components/DailyWeather';
import {colors} from '../utils/colors';

const Weather = () => {
  const {item, weather, loading} = useWeather();

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  if (loading || !weather || !weather.current) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={colors.blueSky} />
      </View>
    );
  }

  const {current} = weather;
  const {dt, temp, feels_like, humidity, pressure, wind_speed} = current;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cityContainer}>
          <Text style={styles.cityName}>{item.city_name}</Text>
          <Text style={styles.cityState}>{item.state}</Text>
          <Text style={styles.cityState}>Fecha: {formatDate(dt)}</Text>
        </View>
        <View style={styles.weatherDetailsContainer}>
          <WeatherDetail title="Temperatura" value={`${temp}°C`} />
          <WeatherDetail title="Sensación térmica" value={`${feels_like}°C`} />
          <WeatherDetail title="Humedad" value={`${humidity}%`} />
          <WeatherDetail title="Presión" value={`${pressure} hPa`} />
          <WeatherDetail title="Viento" value={`${wind_speed} m/s`} />
          <DailyWeather weather={weather.daily} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cityContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityName: {
    color: colors.contrast,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cityState: {
    fontSize: 18,
    color: 'gray',
  },
  weatherDetailsContainer: {
    width: '100%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Weather;
