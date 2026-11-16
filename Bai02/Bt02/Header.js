
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E6DED1'
  },

  logo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#282522'
  },

  dot: {
    color: '#C66B43'
  },

  subtitle: {
    fontSize: 9,
    color: '#898176',
    marginTop: 5
  },

  iconBox: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: '#E9DED0',
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    fontSize: 21,
    color: '#C66B43'
  }
});
