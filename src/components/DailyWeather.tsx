import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';

type WeatherDataProps = {
  weather: any;
};

interface WeatherData {
  dt: number;
  temp: {
    day: number;
  };
  humidity: number;
}

const DailyWeather = ({weather}: WeatherDataProps) => {
  const renderWeatherItem = ({item}: {item: WeatherData}) => (
    <View style={styles.container}>
      <Text style={styles.title}>
        Fecha: {new Date(item.dt * 1000).toLocaleDateString()}
      </Text>
      <Text style={styles.detail}>Temperatura: {item.temp.day}°C</Text>
      <Text style={styles.detail}>Humedad: {item.humidity}%</Text>
    </View>
  );

  return (
    <View>
      <View>
        <Text style={styles.textStyle}>Pronóstico del tiempo</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={weather}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderWeatherItem}
          contentContainerStyle={styles.containerStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {textAlign: 'center', fontSize: 20, marginVertical: 10},
  containerStyle: {
    paddingHorizontal: 10,
  },
  renderItem: {
    borderRadius: 8,
    backgroundColor: colors.background,
    padding: 10,
    marginHorizontal: 10,
  },
  detailTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  detail: {
    fontSize: 14,
    marginBottom: 3,
    color: '#666',
  },
});

export default DailyWeather;
