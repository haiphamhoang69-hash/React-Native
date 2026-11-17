import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ subject, progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{subject.icon}</Text>

      <Text style={styles.title}>{subject.name}</Text>

      <Text style={styles.description}>
        {subject.description}
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>Tiến độ học tập</Text>
        <Text style={styles.percent}>{progress}%</Text>
      </View>

      <View style={styles.background}>
        <View
          style={[
            styles.fill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <Text style={styles.lesson}>
        {progress / 20} / 5 buổi học hoàn thành
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },
  icon: {
    fontSize: 32,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#263D68',
    marginTop: 8,
  },
  description: {
    fontSize: 13,
    color: '#8190A9',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  label: {
    color: '#536785',
    fontWeight: '600',
  },
  percent: {
    color: '#547FD1',
    fontWeight: 'bold',
    fontSize: 18,
  },
  background: {
    height: 12,
    backgroundColor: '#E7EDFA',
    borderRadius: 20,
    marginTop: 10,
    overflow: 'hidden',
  },
  fill: {
    height: 12,
    backgroundColor: '#668FE0',
    borderRadius: 20,
  },
  lesson: {
    fontSize: 12,
    color: '#8190A9',
    marginTop: 10,
  },
});