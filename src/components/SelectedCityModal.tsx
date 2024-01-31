import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

type SelectedCityModalProps = {
  visible: boolean;
  selectedPlace: any;
  closeModal: () => void;
};
const SelectedCityModal = ({visible}: SelectedCityModalProps) => {
  return (
    <Modal visible={visible} animationType="slide" style={styles.modal}>
      <View>
        <Text>Modal</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectedCityModal;
