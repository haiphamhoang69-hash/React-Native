
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatCard({
  number,
  title,
  icon,
  color,  
  bg
}) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <Text style={[styles.icon, { color }]}>
        {icon}
      </Text>

      <Text style={[styles.number, { color }]}>
        {number}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '31%',
    minHeight: 125,
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  icon: {
    fontSize: 22
  },

  number: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8
  },

  title: {
    fontSize: 10,
    color: '#756E64',
    marginTop: 3
  },

  line: {
    width: 25,
    height: 3,
    borderRadius: 5,
    marginTop: 10
  }
});
