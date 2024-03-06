import {MainBackground} from "../MainBackgound";
import {StyleSheet, Text, View} from "react-native";
import {CustomButton} from "../CustomButton";
import {JackOnBackground} from "../JackOnBackground";

export const StartPage = ({setPage}) => {
    return (
        <MainBackground>
                <View style={styles.logoWrapper}>
                    <Text style={styles.logoText}>
                        My Visual Novel
                    </Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <CustomButton onPress={() => setPage('meet')} text={'Start'}/>
                </View>
        </MainBackground>
    )
}

const styles = StyleSheet.create({
    logoWrapper: {
        height: 106,
        width: '100%',
        marginTop: 164,
        backgroundColor: '#73AAC7',
    },
    logoText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 36,
        lineHeight: 40,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 143,
    }
});
