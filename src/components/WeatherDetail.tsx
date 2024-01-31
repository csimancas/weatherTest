import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';

type WeatherDetailProps = {
  title: string;
  value: string;
};

const WeatherDetail = ({title, value}: WeatherDetailProps) => {
  return (
    <View style={styles.weatherDetail}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetail: {
    backgroundColor: colors.blueSky,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
});

export default WeatherDetail;
