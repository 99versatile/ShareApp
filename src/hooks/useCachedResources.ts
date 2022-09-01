import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import {FontAwesome} from '@expo/vector-icons';


export default function useCachedResources () {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(()=>{
        async function loadResourcesAndDataAsync() {
            try {
                await SplashScreen.preventAutoHideAsync(); // display splash screen (loading...)

                //Load fonts 
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'noto-sans-kr-thin': require('src/assets/fonts/NotoSansKR-Thin.otf'),
                    'noto-sans-kr-light': require('src/assets/fonts/NotoSansKR-Light.otf'),
                    'noto-sans-kr-regular': require('src/assets/fonts/NotoSansKR-Regular.otf'),
                    'noto-sans-kr-medium': require('src/assets/fonts/NotoSansKR-Medium.otf'),
                    'noto-sans-kr-bold': require('src/assets/fonts/NotoSansKR-Bold.otf'),
                    'noto-sans-kr-black': require('src/assets/fonts/NotoSansKR-Black.otf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, [])

    return loadingComplete;
}