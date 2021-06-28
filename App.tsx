import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Signature from './src/pages/Signature';

import SignatureWeb from './src/pages/SignatureWeb';

export default function App() {
  return (
    <>
      {Platform.OS === 'web'  ? <SignatureWeb />  : <Signature /> }
    </>
  );
}
