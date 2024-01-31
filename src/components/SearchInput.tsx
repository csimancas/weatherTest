import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchInput = ({value, onChangeText}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Buscar ..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: colors.background,
    color: colors.contrast,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default SearchInput;
