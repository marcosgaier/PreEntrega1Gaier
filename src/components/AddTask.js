import { StyleSheet, TextInput, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({taskTitle,
                  onHandlerTitle,
                  taskDescripcion,
                  onHandlerDescription,
                  addTask}) => {
  return (
    <View style={styles.container}>
        <TextInput 
            value={taskTitle} 
            onChangeText={onHandlerTitle}  
            placeholder='Ingresar titulo' 
            placeholderTextColor="white"
            maxLength={25}
            style={styles.input}
            />
        <TextInput 
            value={taskDescripcion} 
            onChangeText={onHandlerDescription}  
            placeholder='Ingresar descripcion' 
            placeholderTextColor="white"
            multiline
            numberOfLines={4}
            maxLength={100}
            style={styles.input}/>
        <ButtonPrimary title="Agregar Tarea" onPress={addTask}/>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4E9F3D", 
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20, 
    },
    input: {
        width: "90%", 
        borderWidth: 1,
        borderColor: "#D8E9A8", 
        marginVertical: 10, 
        padding: 10, 
        borderRadius: 10, 
        color: "#F4F9E9", 
        fontSize: 18, 
    },
});
