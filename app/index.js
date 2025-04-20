// app/index.js
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Game from '../components/ui/Game';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
