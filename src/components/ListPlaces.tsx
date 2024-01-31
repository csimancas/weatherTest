import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  data: any;
  itemAction: (item: any) => void;
};

type Item = {
  item: {
    id: number;
    city_name: string;
  };
};

const ListPlaces = ({data, itemAction}: Props) => {
  const renderItem = ({item}: Item) => {
    return (
      <Pressable
        onPress={() => itemAction(item)}
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
        }}>
        <Text>{item.city_name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          width: '100%',
          backgroundColor: 'white',
          marginTop: -21,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default ListPlaces;
