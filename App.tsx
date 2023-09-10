import { Signin } from '@screens/Signin';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Signin />
    </NativeBaseProvider>
  );
}
