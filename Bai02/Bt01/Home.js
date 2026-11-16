
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7E9" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Main />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7E9',
  },
});
