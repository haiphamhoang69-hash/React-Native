import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

const subjects = [
  {
    id: '1',
    name: 'React Native',
    icon: '📘',
    description: 'Học phát triển ứng dụng di động',
  },
  {
    id: '2',
    name: 'JavaScript',
    icon: '💻',
    description: 'Học ngôn ngữ lập trình JavaScript',
  },
  {
    id: '3',
    name: 'UI/UX Design',
    icon: '🎨',
    description: 'Học thiết kế giao diện người dùng',
  },
];

export default function App() {
  const [progress, setProgress] = useState({
    '1': 0,
    '2': 0,
    '3': 0,
  });

  const [completedSubject, setCompletedSubject] = useState(null);

  const handleStart = (id) => {
    const current = progress[id];

    if (current >= 100) return;

    const next = Math.min(current + 20, 100);

    setProgress((prev) => ({
      ...prev,
      [id]: next,
    }));

    if (next === 100) {
      setCompletedSubject(id);
    } else if (completedSubject === id) {
      setCompletedSubject(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.greeting}>
          HELLO STUDENT 👋
        </Text>

        <Text style={styles.title}>
          Study Goals
        </Text>

        <Text style={styles.subtitle}>
          Theo dõi và chinh phục các mục tiêu
          học tập của bạn mỗi ngày!
        </Text>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            📚 Tổng số môn học: 3
          </Text>
          <Text style={styles.summaryText}>
            ⭐ Đã hoàn thành: {
              Object.values(progress).filter(p => p === 100).length
            } / 3
          </Text>
        </View>

        {subjects.map((subject) => (
          <View key={subject.id}>
            <ProgressCard
              subject={subject}
              progress={progress[subject.id]}
            />

            <ActionButton
              onPress={() => handleStart(subject.id)}
              completed={progress[subject.id] === 100}
            />

            <AnimatedMessage
              key={subject.id}
              visible={completedSubject === subject.id}
            />
          </View>
        ))}

        <Text style={styles.footer}>
          Every small step counts ♡
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3FF',
  },
  content: {
    padding: 22,
    paddingTop: 35,
  },
  greeting: {
    color: '#7191CB',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#263D68',
    marginTop: 10,
  },
  subtitle: {
    color: '#8190A9',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
    marginBottom: 20,
  },
  summary: {
    backgroundColor: '#DCE8FF',
    padding: 16,
    borderRadius: 15,
    marginBottom: 22,
  },
  summaryText: {
    color: '#385A91',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  footer: {
    textAlign: 'center',
    color: '#8B9AB5',
    marginVertical: 30,
  },
});