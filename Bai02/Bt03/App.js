
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar
} from 'react-native';

import ProductCard from './components/ProductCard';

// Danh sách 6 sản phẩm sách
const products = [
  {
    id: '1',
    name: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    price: '86.000đ',
    description: 'Nghệ thuật giao tiếp và ứng xử trong cuộc sống.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0q4TBHewJxG9yJtGQfB7F3LXJEtTIcSpceHL2A7-OhQ&s=10',
  },
  {
    id: '2',
    name: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: '79.000đ',
    description: 'Câu chuyện về hành trình theo đuổi ước mơ.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSisw-I1ia0Cr21EV9LgSr8WOSZK994AAGkNArmedSIQ&s=10',
  },
  {
    id: '3',
    name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    author: 'Rosie Nguyễn',
    price: '75.000đ',
    description: 'Cuốn sách truyền cảm hứng cho người trẻ.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlc1C7zxsqbzGcIWNuYoEFC5vWJIvJQqAnIR54Af7Ug&s=10',
  },
  {
    id: '4',
    name: 'Dám Nghĩ Lớn',
    author: 'David J. Schwartz',
    price: '95.000đ',
    description: 'Phát triển tư duy và xây dựng thành công.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseoS76aNX29RzjqyGJyVcRXbm9bFTRY4qynQKDA1OHQ&s=10',
  },
  {
    id: '5',
    name: 'Tôi Tài Giỏi, Bạn Cũng Thế',
    author: 'Adam Khoo',
    price: '110.000đ',
    description: 'Phương pháp học tập và phát triển bản thân.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCwWGGc4PqSjVVErSiMmAd6D1kN2GMI6MPsG3CbepWw&s=10',
  },
  {
    id: '6',
    name: 'Cà Phê Cùng Tony',
    author: 'Tony Buổi Sáng',
    price: '68.000đ',
    description: 'Những câu chuyện ý nghĩa về cuộc sống.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDavcFUWVajKVMHQxt1NrmousVpFSNQiYZRGcTKm9hg&s=10',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#5D321B"
        barStyle="light-content"
      />

      {/* Tiêu đề ứng dụng */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          BOOK STORE
        </Text>

        <Text style={styles.title}>
          Nhà Sách Online
        </Text>

        <Text style={styles.subtitle}>
          Tri thức mở ra tương lai
        </Text>
      </View>

      {/* Tìm kiếm */}
      <TextInput
        style={styles.search}
        placeholder="Tìm kiếm sách yêu thích..."
      />

      <Text style={styles.heading}>
        Sách nổi bật
      </Text>

      <Text style={styles.count}>
        Khám phá bộ sưu tập sách của chúng tôi
      </Text>

      {/* Hiển thị danh sách bằng FlatList */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4EF',
  },
  header: {
    backgroundColor: '#5D321B',
    padding: 20,
    paddingTop: 30,
  },
  logo: {
    fontSize: 15,
    color: '#F5D6A5',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 27,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#F5D6A5',
    fontSize: 14,
    marginTop: 5,
  },
  search: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5D5C5',
    fontSize: 14,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5D321B',
    marginHorizontal: 15,
  },
  count: {
    color: '#888888',
    fontSize: 13,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
});
