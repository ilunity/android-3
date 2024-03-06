import {ImageBackground, StyleSheet, View} from "react-native";
import {Asset} from "expo-asset";

const backgroundUri = Asset.fromModule(require('../assets/kir.png')).uri;

export const JackOnBackground = ({children}) => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={{uri: backgroundUri}}
                style={styles.background}
            >
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    background: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
    }
});
