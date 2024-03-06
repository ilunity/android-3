import {StyleSheet, Text, View} from "react-native";

export const TextFrame = ({text}) => {
    return (
        <View style={styles.textWrapper}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrapper: {
        minHeight: 34,
        width: '100%',
        backgroundColor: '#275168',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        color: '#FFFFFF',
    }
});
