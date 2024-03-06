import {StyleSheet, View} from "react-native";
import {TextFrame} from "../TextFrame";
import {HikingBackground} from "../HikingBackground";
import {CustomButton} from "../CustomButton";

export const HikingPage = () => {
    return (
        <HikingBackground>
            <View style={styles.container}>
                <TextFrame text={`How cozy... But it’s already getting dark...`}/>
                <View style={styles.buttonsWrapper}>
                    <CustomButton type={'secondary'} onPress={() => {
                    }} text={'Go home and watch the film'}/>
                    <CustomButton type={'secondary'} onPress={() => {
                    }} text={'Go home and celebrate Halloween'}/>
                </View>
            </View>
        </HikingBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 328,
        flex: 1,
    },
    buttonsWrapper: {
        width: '100%',
        flex: 1,
        marginTop: 21,
        marginBottom: 31,
        gap: 26,
        justifyContent: 'flex-end',
    },
});
