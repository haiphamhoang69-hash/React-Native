
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.author}>
        Tác giả: {product.author}
      </Text>

      <Text style={styles.price}>
        {product.price}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Mua ngay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 7,
    padding: 10,
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  author: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  price: {
    fontSize: 15,
    color: '#E53935',
    fontWeight: 'bold',
    marginTop: 7,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    minHeight: 35,
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProductCard;
