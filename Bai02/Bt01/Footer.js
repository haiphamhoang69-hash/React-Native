
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>

      <Text style={styles.logo}>
        🍃 HOANG HAI TEA
      </Text>

      <Text style={styles.thanks}>
        Cảm ơn quý khách đã ghé thăm!
      </Text>

      <View style={styles.line} />

      <Text style={styles.info}>
        ☎ Hotline: 0935910520
      </Text>

      <Text style={styles.info}>
         Trà ngon - Niềm vui mỗi ngày
      </Text>

      <Text style={styles.end}>
        Hẹn gặp lại quý khách ❤️
      </Text>

      <Text style={styles.copy}>
        © 2026 HOANG HAI TEA
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#315C43',
    padding: 25,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 15,
  },

  logo: {
    color: '#D9E9A5',
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  thanks: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 12,
  },

  line: {
    width: '70%',
    height: 1,
    backgroundColor: '#789078',
    marginVertical: 18,
  },

  info: {
    color: '#F1F5E9',
    fontSize: 13,
    marginBottom: 10,
  },

  end: {
    color: '#D9E9A5',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },

  copy: {
    color: '#B8CBB2',
    fontSize: 10,
    marginTop: 18,
  },
});
