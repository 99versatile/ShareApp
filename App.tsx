import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthWideButton from './src/components/button/AuthWideButton';
import StandardInput from './src/components/StandardInput';
import CustomBackButton from './src/components/button/CustomBackButton';
import * as React from 'react';
//import useCachedResources from './src/hooks/useCachedResources';
import { useState, useEffect } from 'react';
import Fonts from './src/assets/fonts/Fonts';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
//import {FontAwesome} from '@expo/vector-icons';

const value = '';
const setValue = () => {};
//const loadingComplete = useCachedResources();

SplashScreen.preventAutoHideAsync();

//const [loadingComplete, setLoadingComplete] = useState(false);

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'noto-sans-kr-thin': require('./src/assets/fonts/NotoSansKR-Thin.otf'),
    'noto-sans-kr-light': require('./src/assets/fonts/NotoSansKR-Light.otf'),
    'noto-sans-kr-regular': require('./src/assets/fonts/NotoSansKR-Regular.otf'),
    'noto-sans-kr-medium': require('./src/assets/fonts/NotoSansKR-Medium.otf'),
    'noto-sans-kr-bold': require('./src/assets/fonts/NotoSansKR-Bold.otf'),
    'noto-sans-kr-black': require('./src/assets/fonts/NotoSansKR-Black.otf'),
  });

  const onLayoutRootView = useCallback(async ()=>{
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <CustomBackButton onPress={setValue}/>
      <AuthWideButton name={'새 계정 만들기'} onPress={()=>{}} main={true} disabled={false} />
      <AuthWideButton name={'로그인'} onPress={()=>{}} main={false} disabled={false} />
      <StandardInput placeHolder={'이메일 주소'} value={value} setValue={setValue} secure={false} />
      <StandardInput placeHolder={'비밀번호'} value={value} setValue={setValue} secure={true} />
      <Text style={{fontFamily: Fonts.bold, fontWeight: '200'}}>Hello!!!</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
