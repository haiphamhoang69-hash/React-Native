
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { cookie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: cookie.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.label}>
          COOKIE COLLECTION
        </Text>

        <Text style={styles.title}>
          {cookie.name}
        </Text>

        <Text style={styles.price}>
          {cookie.price}
        </Text>

        <View style={styles.line} />

        <Text style={styles.heading}>
          Giới thiệu về bánh 🍪
        </Text>

        <Text style={styles.description}>
          {cookie.description}
        </Text>

        <View style={styles.note}>
          <Text style={styles.noteText}>
            ♡ Một chiếc bánh nhỏ, một niềm vui lớn!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            ← Quay lại danh sách
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EF',
  },
  image: {
    width: '100%',
    height: 280,
  },
  content: {
    padding: 22,
  },
  label: {
    fontSize: 12,
    letterSpacing: 3,
    color: '#B58B69',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#70452C',
    marginTop: 12,
  },
  price: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#B36C3E',
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#E8D6C3',
    marginVertical: 22,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#70452C',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#80634D',
    lineHeight: 27,
    textAlign: 'justify',
  },
  note: {
    backgroundColor: '#F6E7D5',
    padding: 15,
    borderRadius: 12,
    marginTop: 25,
  },
  noteText: {
    color: '#8B5E3C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A66B45',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 35,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
