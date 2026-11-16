
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput
} from 'react-native';

import Header from './components/Header';
import Category from './components/Category';
import ProductCard from './components/ProductCard';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [search, setSearch] = useState('');

  const products = [
    {
      id: '1',
      name: 'Nhà Giả Kim',
      price: '79.000đ',
      description: 'Hành trình khám phá ước mơ và ý nghĩa cuộc sống.',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMErrtR0FW375naya8jBO8zON1XwuvYBdwsjLcplTJazEH7F6DNicUTJH-Ihv8m7jKHbzS1G866wsJDVHiagLODVCX_EO3d0v9ZcxSI_ASdjgSzm4KsVHVW2XuteIn-P2rzVQ6ypc&usqp=CAc',
      category: 'Văn học'
    },
    {
      id: '2',
      name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
      price: '85.000đ',
      description: 'Cuốn sách truyền cảm hứng dành cho người trẻ.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwcXBn5VkpTC0mglCcOV7RBxEfK8NUqNOz5Xl8VzMgA&s=10',
      category: 'Kỹ năng'
    },
    {
      id: '3',
      name: 'Đắc Nhân Tâm',
      price: '95.000đ',
      description: 'Nghệ thuật giao tiếp và ứng xử trong cuộc sống.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnLk5GrTj7fJoeyEnDHzWj5LQ3MeB8uOyz2S7Ja52WQ&s=10',
      category: 'Kỹ năng'
    },
    {
      id: '4',
      name: 'Cây Cam Ngọt Của Tôi',
      price: '90.000đ',
      description: 'Câu chuyện cảm động về tuổi thơ và gia đình.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2inUR7sAq9j7bv9RHrCVH6VYqkOcPuZUUBsXLpTeHoQ&s=10',
      category: 'Văn học'
    },
    {
      id: '5',
      name: 'Dám Bị Ghét',
      price: '110.000đ',
      description: 'Học cách sống tự do và làm chủ bản thân.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NGNyTZ3NX9KGdoNqHpjL-FKlgtmjwZF7GY_HlK_X6w&s=10',
      category: 'Kỹ năng'
    },
    {
      id: '6',
      name: 'Đi Tìm Lẽ Sống',
      price: '88.000đ',
      description: 'Khám phá nghị lực và ý nghĩa cuộc đời.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxwotIxwwcEBbj74BLQR04HPnUT9KOkJEHdVcy6lD2A&s=10',
      category: 'Văn học'
    }
  ];

  const categories = ['Tất cả', 'Văn học', 'Kỹ năng'];

  const filteredProducts = products.filter(item => {
    const matchCategory =
      selectedCategory === 'Tất cả' ||
      item.category === selectedCategory;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header />

        <View style={styles.greeting}>
          <Text style={styles.smallText}>
            GÓC NHỎ DÀNH CHO NGƯỜI YÊU SÁCH
          </Text>

          <Text style={styles.title}>
            Mỗi cuốn sách,{'\n'}
            một thế giới mới.
          </Text>

          <Text style={styles.subtitle}>
            Chọn một cuốn sách hay và bắt đầu hành trình của bạn.
          </Text>
        </View>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm tên sách..."
            placeholderTextColor="#A69C8D"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <Text style={styles.sectionTitle}>
          Danh mục sách
        </Text>

        <Category
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <View style={styles.productHeading}>
          <Text style={styles.sectionTitle}>
            Sách dành cho bạn
          </Text>

          <Text style={styles.productCount}>
            {filteredProducts.length} sản phẩm
          </Text>
        </View>

        <View style={styles.productList}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </View>

        {filteredProducts.length === 0 && (
          <Text style={styles.empty}>
            Không tìm thấy sản phẩm phù hợp.
          </Text>
        )}

        <Text style={styles.footer}>
          Một cuốn sách hay, một ngày ý nghĩa.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E7'
  },

  content: {
    paddingHorizontal: 18,
    paddingBottom: 20
  },

  greeting: {
    marginTop: 27,
    marginBottom: 20
  },

  smallText: {
    color: '#718477',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1
  },

  title: {
    color: '#354638',
    fontSize: 29,
    fontWeight: 'bold',
    lineHeight: 38,
    marginTop: 12
  },

  subtitle: {
    color: '#8C8377',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 9
  },

  searchBox: {
    height: 48,
    backgroundColor: '#FFFCF6',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E9E1D5'
  },

  searchIcon: {
    fontSize: 24,
    color: '#718477',
    marginRight: 10
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#354638'
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#354638'
  },

  productHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15
  },

  productCount: {
    color: '#8C8377',
    fontSize: 11
  },

  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  empty: {
    textAlign: 'center',
    color: '#8C8377',
    padding: 25
  },

  footer: {
    textAlign: 'center',
    color: '#8C8377',
    fontSize: 11,
    paddingVertical: 25
  }
});
