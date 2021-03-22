//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';

import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';

import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor="#6BA0FF" translucent/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  );
}