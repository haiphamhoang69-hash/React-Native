
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Pressable
} from 'react-native';

export default function Welcome({ onStart }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#234832" />

      <Text style={styles.logo}>🍃 HOANG HAI TEA</Text>

      <Text style={styles.small}>WELCOME TO OUR TEA SHOP</Text>

      <Text style={styles.title}>
        CHÀO MỪNG BẠN
      </Text>

      <Text style={styles.title2}>
        ĐẾN VỚI
      </Text>

      <Text style={styles.brand}>
        HOÀNG HẢI TEA
      </Text>

      <Text style={styles.subtitle}>
        Trà ngon mỗi ngày – Niềm vui trong từng khoảnh khắc
      </Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyzxQe-Y8qDsNJdS049E6FLwx0yJf1yuMc-AlpbDAQA&s=10'
        }}
        style={styles.image}
      />

      <View style={styles.note}>
        <Text style={styles.noteText}>
          🧋 Hương vị thơm ngon – Pha chế tươi mới
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={onStart}
      >
        <Text style={styles.buttonText}>
          BẮT ĐẦU
        </Text>
        <Text style={styles.arrow}>→</Text>
      </Pressable>

      <Text style={styles.footer}>
        © 2026 HOANG HAI TEA
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#315C43',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    color: '#D9E9A5',
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 35,
  },

  small: {
    color: '#C5D6AE',
    fontSize: 11,
    letterSpacing: 4,
    marginBottom: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  title2: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },

  brand: {
    color: '#D9E9A5',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    letterSpacing: 1,
  },

  subtitle: {
    color: '#E6EEDC',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 15,
    marginBottom: 25,
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 25,
  },

  note: {
    backgroundColor: '#E9F1D0',
    padding: 13,
    borderRadius: 15,
    marginTop: 22,
    width: '100%',
    alignItems: 'center',
  },

  noteText: {
    color: '#315C43',
    fontSize: 12,
    fontWeight: 'bold',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#D9E9A5',
    width: '100%',
    padding: 17,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    elevation: 5,
  },

  buttonText: {
    color: '#315C43',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  arrow: {
    color: '#315C43',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
  },

  footer: {
    color: '#B8CBB2',
    fontSize: 10,
    marginTop: 28,
  },
});
