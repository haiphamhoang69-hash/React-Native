
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.logo}>🍃 HOANG HAI TEA</Text>
        <Text style={styles.open}>● ĐANG PHỤC VỤ</Text>
      </View>

      <Text style={styles.title}>
        TRÀ NGON
      </Text>

      <Text style={styles.title2}>
        MỖI NGÀY
      </Text>

      <Text style={styles.subtitle}>
        Hương vị tươi mới - Ngọt ngào từng khoảnh khắc
      </Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnNk0j4ecBdVmQfWCjLYmSv0pWyrkUTkCfgihtwHvng&s=10'
        }}
        style={styles.banner}
      />

      <View style={styles.tag}>
        <Text style={styles.tagText}>
          ✨ THƯỞNG THỨC NGAY HÔM NAY
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#315C43',
    padding: 22,
    paddingTop: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  open: {
    color: '#D9F2B4',
    fontSize: 10,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  title2: {
    fontSize: 32,
    color: '#D9E9A5',
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  subtitle: {
    color: '#F1F5E9',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 20,
  },

  banner: {
    width: '100%',
    height: 175,
    borderRadius: 20,
  },

  tag: {
    backgroundColor: '#E9F1D0',
    padding: 12,
    borderRadius: 15,
    marginTop: 16,
    alignItems: 'center',
  },

  tagText: {
    color: '#315C43',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
