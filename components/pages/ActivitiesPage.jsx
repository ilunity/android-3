import {StyleSheet, View} from "react-native";
import {TextFrame} from "../TextFrame";
import {CustomButton} from "../CustomButton";
import {MainBackground} from "../MainBackgound";
import {JackOnBackground} from "../JackOnBackground";

export const ActivitiesPage = ({setPage, myName}) => {
    return (
        <MainBackground>
            <JackOnBackground>
                <View style={styles.container}>
                    <TextFrame text={`Great, ${myName}! What we are going to do?`}/>
                    <View style={styles.buttonsWrapper}>
                        <CustomButton type={'secondary'} onPress={() => {
                        }} text={'Walking'}/>
                        <CustomButton type={'secondary'} onPress={() => setPage('hiking')} text={'Hiking'}/>
                        <CustomButton type={'secondary'} onPress={() => {
                        }} text={'Go to the field'}/>
                    </View>
                </View>
            </JackOnBackground>
        </MainBackground>
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
