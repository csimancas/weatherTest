import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ListPlaces from '../components/ListPlaces';
import SearchInput from '../components/SearchInput';
import useHome from '../hooks/useHome';
import {colors} from '../utils/colors';

const Home = () => {
  const {searchText, setSearchText, places} = useHome();

  const navigation: any = useNavigation();
  const handleItemPress = (item: any) => {
    navigation.navigate('Weather', {
      item,
    });
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/clima.png')} style={styles.image} />
      <Text style={styles.textStyle}>
        Por favor escribre la ciudad o destino ...
      </Text>

      <SearchInput
        value={searchText}
        onChangeText={(text: string) => setSearchText(text)}
      />
      {places.length > 0 && (
        <ListPlaces data={places} itemAction={handleItemPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.blueSky,
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
});
export default Home;
