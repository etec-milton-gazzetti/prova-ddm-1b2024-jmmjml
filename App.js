import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync();
function HomeScreen({navigation}){
  const [fontsLoaded, fontError] = useFonts({
    'Mulish': { uri: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap' },
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
      <View style={styles.container}>
      <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Trigonometria</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Conteúdo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    );
}

  const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily: "Mulish",
    fontWeight:"400",
  },
});
