import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍪</Text>

      <Text style={styles.logo}>COOKIE SHOP</Text>

      <Text style={styles.title}>Xin chào!</Text>

      <Text style={styles.description}>
        Chào mừng bạn đến với thế giới bánh quy.
        Hãy cùng khám phá những chiếc bánh
        thơm ngon và ngọt ngào nhé!
      </Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800'
        }}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          Bắt đầu khám phá →
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Made with love ♡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4E6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  emoji: {
    fontSize: 75,
  },
  logo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#A66B45',
    letterSpacing: 3,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#70452C',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#80634D',
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 15,
  },
  image: {
    width: 230,
    height: 150,
    borderRadius: 20,
    marginTop: 25,
  },
  button: {
    backgroundColor: '#A66B45',
    padding: 16,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    color: '#A88A70',
    marginTop: 25,
  },
});