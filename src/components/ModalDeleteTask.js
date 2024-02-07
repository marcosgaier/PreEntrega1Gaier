import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import React from 'react';

const ModalDeleteTask = ({ taskSelected, deleteTask, onHandlerModaDelete, modalVisible }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType='slide' 
      transparent={true} 
      onRequestClose={() => onHandlerModaDelete({})}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>¿Estás seguro que quieres eliminar la tarea: {taskSelected.title}?</Text>
          <View style={styles.buttonContainer}>
            <Button title='Sí' onPress={deleteTask} color="#2196F3"/>
            <Button title='No' onPress={() => onHandlerModaDelete({})} color="#f44336"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDeleteTask;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
