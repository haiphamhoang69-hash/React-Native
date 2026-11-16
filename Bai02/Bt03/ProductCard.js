
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.card}>

      {imageError ? (
        <View style={styles.imageError}>
          <Text style={styles.errorIcon}>📚</Text>
          <Text style={styles.errorText}>
            Không tải được ảnh
          </Text>
        </View>
      ) : (
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
      )}

      <View style={styles.info}>

        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>

        <View style={styles.bottom}>

          <Text style={styles.price}>
            {product.price}
          </Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() =>
              Alert.alert(
                'Thêm vào giỏ hàng',
                'Bạn đã chọn: ' + product.name
              )
            }
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFFCF6',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EAE2D6'
  },

  image: {
    width: '100%',
    height: 145,
    backgroundColor: '#EAE3D8'
  },

  imageError: {
    width: '100%',
    height: 145,
    backgroundColor: '#EAE3D8',
    justifyContent: 'center',
    alignItems: 'center'
  },

  errorIcon: {
    fontSize: 35
  },

  errorText: {
    fontSize: 10,
    color: '#918879',
    marginTop: 5
  },

  info: {
    padding: 11
  },

  category: {
    fontSize: 9,
    color: '#718477',
    fontWeight: 'bold',
    marginBottom: 6
  },

  name: {
    fontSize: 13,
    color: '#354638',
    fontWeight: 'bold',
    minHeight: 34
  },

  description: {
    fontSize: 10,
    color: '#918879',
    lineHeight: 15,
    marginTop: 5,
    minHeight: 30
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12
  },

  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#B77953'
  },

  addButton: {
    width: 29,
    height: 29,
    backgroundColor: '#526957',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 21,
    lineHeight: 25
  }
});
