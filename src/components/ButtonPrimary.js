import { Pressable, StyleSheet, Text} from 'react-native'

const ButtonPrimary = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4E9F3D", 
        width: "80%", 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        alignItems: "center",
        borderRadius: 10, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    text: {
        fontSize: 18, 
        color: '#FFFFFF', 
        fontWeight: '500', 
    },
});
