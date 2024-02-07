import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Modal, Button, Dimensions } from 'react-native';
import uuid from 'react-native-uuid';
import AddTask from './src/components/AddTask'; 
import ListTasks from './src/components/ListTasks';
import ModalDeleteTask from './src/components/ModalDeleteTask';

const screenWidth = Dimensions.get('window').width;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (!title.trim() && !description.trim()) return;
    const task = {
      id: uuid.v4(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTaskList(currentTasks => [...currentTasks, task]);
    setTitle('');
    setDescription('');
  };

  const handleDeleteTask = () => {
    setIsModalVisible(false);
    setTaskList(currentTasks => currentTasks.filter(task => task.id !== selectedTask.id));
  };

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const handleToggleTaskCompletion = (id) => {
    setTaskList(currentTasks =>
      currentTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <AddTask
        taskTitle={title}
        onHandlerTitle={setTitle}
        taskDescripcion={description}
        onHandlerDescription={setDescription}
        addTask={handleAddTask}
      />
      <ListTasks
        tasks={taskList}
        onHandlerModaDelete={handleSelectTask}
        screenWidth={screenWidth}
        updateTaskCompleted={handleToggleTaskCompletion}
      />
      <ModalDeleteTask
        modalVisible={isModalVisible}
        taskSelected={selectedTask}
        deleteTask={handleDeleteTask}
        onHandlerModaDelete={() => setIsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 50,
  },

});

export default App;
