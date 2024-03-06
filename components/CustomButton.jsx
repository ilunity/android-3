import {Pressable, StyleSheet, Text} from "react-native";

export const CustomButton = ({onPress, text, type = 'primary'}) => {
    return (
        <Pressable style={styles({buttonType: type}).button} onPress={onPress}>
            <Text style={styles({buttonType: type}).buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = ({buttonType}) => StyleSheet.create({
    button: {
        height: 34,
        width: '100%',
        backgroundColor: buttonType === 'primary' ? '#275168' : '#73AAC7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        color: '#fff',
    }
})
