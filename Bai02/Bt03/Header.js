
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>
          TIỆM SÁCH NHỎ<Text style={styles.dot}>.</Text>
        </Text>

        <Text style={styles.subtitle}>
          ĐỌC SÁCH - MỞ RỘNG THẾ GIỚI
        </Text>
      </View>

      <View style={styles.iconBox}>
        <Text style={styles.icon}>📚</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E6DED1'
  },

  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#354638'
  },

  dot: {
    color: '#B77953'
  },

  subtitle: {
    fontSize: 9,
    color: '#918879',
    marginTop: 5
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#E5E9DF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    fontSize: 22
  }
});
