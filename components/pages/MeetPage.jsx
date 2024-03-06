import {MainBackground} from "../MainBackgound";
import {StyleSheet, TextInput, View} from "react-native";
import {TextFrame} from "../TextFrame";
import {CustomButton} from "../CustomButton";
import {JackOnBackground} from "../JackOnBackground";

export const MeetPage = ({setPage, myName, setMyName}) => {
    return (
        <MainBackground>
            <JackOnBackground>
                <View style={styles.text}>
                    <TextFrame text={'Hello! My name is Jack. And you?'}/>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={setMyName}
                    value={myName}
                    placeholder={"Input your name..."}
                />
                <View style={styles.buttonWrapper}>
                    <CustomButton onPress={() => setPage('activities')} text={'Accept'}/>
                </View>
            </JackOnBackground>
        </MainBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        marginTop: 328,
    },
    input: {
        height: 56,
        width: '100%',
        marginTop: 42,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 17,
    },
});
