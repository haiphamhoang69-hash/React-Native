
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseCard({ course, index }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.number}>
          0{index + 1}
        </Text>

        <View style={[
          styles.iconBox,
          { backgroundColor: course.color + '20' }
        ]}>
          <Text style={styles.icon}>
            {course.icon}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            {course.name}
          </Text>

          <Text style={styles.teacher}>
            Giảng viên: {course.teacher}
          </Text>
        </View>

        <Text style={[
          styles.arrow,
          { color: course.color }
        ]}>
          ↗
        </Text>
      </View>

      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>
          Tiến độ học tập
        </Text>

        <Text style={[styles.percent, { color: course.color }]}>
          {course.progress}%
        </Text>
      </View>

      <View style={styles.progressBg}>
        <View style={[
          styles.progress,
          {
            width: `${course.progress}%`,
            backgroundColor: course.color
          }
        ]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFCF6',
    padding: 15,
    borderRadius: 16,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#EDE5D9'
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  number: {
    color: '#B9AEA0',
    fontSize: 12,
    fontWeight: 'bold',
    width: 27
  },

  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    fontSize: 21
  },

  info: {
    flex: 1,
    marginLeft: 11
  },

  name: {
    fontSize: 14,
    color: '#282522',
    fontWeight: 'bold'
  },

  teacher: {
    fontSize: 10,
    color: '#999083',
    marginTop: 5
  },

  arrow: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 7
  },

  progressLabel: {
    color: '#AAA194',
    fontSize: 10
  },

  percent: {
    fontSize: 10,
    fontWeight: 'bold'
  },

  progressBg: {
    height: 5,
    backgroundColor: '#EEE9E0',
    borderRadius: 5
  },

  progress: {
    height: 5,
    borderRadius: 5
  }
});
