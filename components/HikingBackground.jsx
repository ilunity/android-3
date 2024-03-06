import {ImageBackground, StyleSheet} from "react-native";
import {Asset} from "expo-asset";

const backgroundUri = Asset.fromModule(require('../assets/bg-2.png')).uri;

export const HikingBackground = ({children}) => {
    return (
        <ImageBackground
            source={{uri: backgroundUri}}
            style={styles.background}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
    }
});
