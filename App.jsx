import {StyleSheet, View} from 'react-native';

import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useState} from "react";
import {Asset} from "expo-asset";
import {StartPage} from "./components/pages/StartPage";
import {MeetPage} from "./components/pages/MeetPage";
import {ActivitiesPage} from "./components/pages/ActivitiesPage";
import {HikingPage} from "./components/pages/HikingPage";

SplashScreen.preventAutoHideAsync();

const background2Uri = Asset.fromModule(require('./assets/bg-2.png')).uri;
const kirUri = Asset.fromModule(require('./assets/kir.png')).uri;

const PagesMap = {
    start: StartPage,
    meet: MeetPage,
    activities: ActivitiesPage,
    hiking: HikingPage,
}

export default function App() {
    const [page, setPage] = useState('start');
    const [myName, setMyName] = useState('');

    const [fontsLoaded, fontError] = useFonts({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const CurrentPage = PagesMap[page];

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <CurrentPage setPage={setPage} myName={myName} setMyName={setMyName}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
