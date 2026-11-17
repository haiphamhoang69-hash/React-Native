import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function ActionButton({ onPress, completed }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        completed && styles.completed,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {completed ? '✓ Đã hoàn thành' : '▶ Bắt đầu học'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6489D5',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 12,
  },
  completed: {
    backgroundColor: '#38A77B',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});