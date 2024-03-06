import {Asset} from "expo-asset";
import {ImageBackground, StyleSheet} from "react-native";

const backgroundUri = Asset.fromModule(require('../assets/bg-1.png')).uri;

export const MainBackground = ({children}) => {
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
        position: "relative",
    }
});
