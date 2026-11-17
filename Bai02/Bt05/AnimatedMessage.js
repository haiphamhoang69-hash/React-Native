
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

export default function AnimatedMessage({ visible }) {
  const scale = useRef(new Animated.Value(0.3)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      scale.setValue(0.3);
      opacity.setValue(0);

      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scale.setValue(0.3);
      opacity.setValue(0);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
    >
      <Text style={styles.emoji}>🎉</Text>

      <Text style={styles.title}>
        Chúc mừng bạn!
      </Text>

      <Text style={styles.message}>
        Bạn đã hoàn thành mục tiêu học tập.
        Hãy tiếp tục cố gắng nhé!
      </Text>

      <Text style={styles.star}>⭐ 🌟 ⭐</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F7EF',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#A7DFC3',
  },
  emoji: {
    fontSize: 55,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#25865F',
    marginTop: 10,
  },
  message: {
    fontSize: 15,
    color: '#507C68',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 10,
  },
  star: {
    fontSize: 25,
    marginTop: 15,
  },
});
