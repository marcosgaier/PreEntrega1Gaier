import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import CartTaskList from './CartTaskList';

const screenWidth = Dimensions.get('window').width;

const ListTasks = ({ tasks, onHandlerModaDelete, updateTaskCompleted }) => {
  
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false} 
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CartTaskList
              item={item}
              onHandlerModaDelete={onHandlerModaDelete}
              screenWidth={screenWidth - 40} 
              updateTaskCompleted={updateTaskCompleted}
            />
          )}
          onMomentumScrollEnd={(e) => {
            const pageIndex = Math.floor(e.nativeEvent.contentOffset.x / screenWidth);
            setCurrentPage(pageIndex);
          }}
        />
      </View>
      
      <View style={styles.indicatorContainer}>
        {tasks.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentPage === index ? styles.indicatorActive : styles.indicatorInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ListTasks;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20, 
    },
    tasksContainer: {
        padding: 10,
    },
    indicatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    indicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    indicatorActive: {
      backgroundColor: 'blue', 
    },
    indicatorInactive: {
      backgroundColor: 'gray',
    },
});
