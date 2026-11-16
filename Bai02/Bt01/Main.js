
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';

const drinks = [
  {
    name: 'Trà sữa truyền thống',
    price: '30.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUR_3SNxj89l3GRMFGvMhyL39h-zGZcxdZVVaC1vaFlg&s=10'
  },
  {
    name: 'Trà sữa trân châu đường đen',
    price: '35.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQot1eN2ATZfhoMjdMqfasSLHepNogNuSGAvawhIp-MA&s=10'
  },
  {
    name: 'Trà sữa thái xanh',
    price: '30.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxKQCsP9-txH9qkbP92OV6ahUzeMJLd6bn0nubLPCDA&s=10'
  },
  {
    name: 'Trà sữa kem trứng',
    price: '42.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCIVgyeBOXW-9uo1wJweZH6yZgeGJ3-22O9_iBYMU3Q&s=10'
  },
  {
    name: 'Trà sữa matcha',
    price: '40.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqoVD6Ec249lZnxypY8_FFJM34EpcXkZfI4BvH7XQ8g&s=10'
  },
  {
    name: 'Trà sữa thái đỏ',
    price: '20.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOdelsj3RkLjHt32H2ZE5Uf6YeBgC7lJt3lRM-nS0cA&s=10'
  },
  {
    name: 'Trà sữa khoai môn',
    price: '35.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWi27KDZHo4TKEwquDGLApZvQL2ikwI0l8rnGtE2CQw&s=10'
  },
  {
    name: 'Trà lựu đỏ',
    price: '35.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBTOsqNLm124ArQMTb618G13m3fVbqgTndxJ4Prz_4A&s=10'
  },
  {
    name: 'Trà đào cam sả',
    price: '28.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTT3eDbY8hpdX3VdobMSVilVNtVjJbJV5xxo2ImG2bg&s=10'
  },
  {
    name: 'Trà chanh',
    price: '20.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIfI7JOUhy5A2IKqtYMUVsxTxDBUpgGPBQ1sl613XAg&s=10'
  },
  {
    name: 'Trà ô long nhài',
    price: '32.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZarc2MDtCwrRfedCG6kyMAXl-YCQ8XrYKlGPY_pk_w&s=10'
  },
  {
    name: 'Trà kiwi',
    price: '38.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oiDqQ1l3Q-ogJWK8FQ_0codODm7cPks6NvArPGlObA&s=10'
  },
  {
    name: 'Trà vải',
    price: '25.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf85MuSXV0ctHEDij-DP3bUv5ZVl7VvaEokXQguOlM3g&s=10'
  },
  {
    name: 'Trà ổi',
    price: '30.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiN5IOggKh6Lh_gX6DGidkXwJfjvr8rBTYNlzSrtUuoA&s=10'
  },
  {
    name: 'Trà nho',
    price: '30.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdOsW46R_IhqnPehIShv_gMByWzZFb0R8c4ksrc2l1w&s=10'
  },
  {
    name: 'Trà gừng / hot-cold',
    price: '15.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CneKgKUR7nymybQlFKbYScbZfCgglSm9IgS8j9jsdA&s=10'
  },
  {
    name: 'Trà trái cây',
    price: '40.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYaShzgN28-O0CgEe06How6SfGVa0ptdTCoHFEvuK2w&s=10'
  },
  {
    name: 'Trà bí đao hạt chia',
    price: '25.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMQk5wIFUE0RC-9AUkuYe69q6qFSEvq4rckodIjfSDw&s=10'
  },
  {
    name: 'Trà dâu',
    price: '35.000đ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRai7lF81i52QpCvfHLixcMHPtdAZKSewZJ8evObmF5Uw&s=10'
  }
];

export default function Main() {
  const [search, setSearch] = useState('');

  const filteredDrinks = drinks.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.smallTitle}>OUR MENU</Text>

      <Text style={styles.heading}>Menu đồ uống</Text>

      <Text style={styles.description}>
        Khám phá những hương vị tuyệt vời tại Hoàng Hải Tea!
      </Text>

      <View style={styles.search}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          placeholder="Tìm món nước yêu thích..."
          placeholderTextColor="#999"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.featured}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYaShzgN28-O0CgEe06How6SfGVa0ptdTCoHFEvuK2w&s=10'
          }}
          style={styles.featuredImage}
        />

        <View style={styles.featuredInfo}>
          <Text style={styles.featuredLabel}>
            ⭐ GỢI Ý HÔM NAY
          </Text>

          <Text style={styles.featuredName}>
            Trà trái cây
          </Text>

          <Text style={styles.featuredDesc}>
            Tươi mát và thơm ngon
          </Text>
        </View>
      </View>

      <View style={styles.menuHeader}>
        <Text style={styles.menuTitle}>
          Tất cả đồ uống
        </Text>

        <Text style={styles.count}>
          {filteredDrinks.length} món
        </Text>
      </View>

      <View style={styles.grid}>
        {filteredDrinks.map((item, index) => (
          <View style={styles.card} key={index}>

            <Image
              source={{ uri: item.image }}
              style={styles.drinkImage}
              resizeMode="cover"
            />

            <View style={styles.cardInfo}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.detail}>
                Pha chế tươi mỗi ngày
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>
            </View>

          </View>
        ))}
      </View>

      {filteredDrinks.length === 0 && (
        <Text style={styles.empty}>
          Không tìm thấy món nước này!
        </Text>
      )}

      <View style={styles.thanks}>
        <Text style={styles.thanksText}>
          ❤️ Cảm ơn bạn đã lựa chọn HOANG HAI TEA!
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 17,
  },

  smallTitle: {
    color: '#8AAB70',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 20,
  },

  heading: {
    color: '#315C43',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 5,
  },

  description: {
    color: '#829078',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 18,
  },

  search: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4EBD8',
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 17,
  },

  input: {
    flex: 1,
    padding: 13,
    fontSize: 13,
    color: '#315C43',
  },

  featured: {
    flexDirection: 'row',
    backgroundColor: '#E5EDD9',
    borderRadius: 18,
    padding: 10,
    marginBottom: 25,
    alignItems: 'center',
  },

  featuredImage: {
    width: 105,
    height: 105,
    borderRadius: 14,
  },

  featuredInfo: {
    flex: 1,
    paddingLeft: 13,
  },

  featuredLabel: {
    color: '#B07C37',
    fontSize: 10,
    fontWeight: 'bold',
  },

  featuredName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#315C43',
    marginTop: 8,
  },

  featuredDesc: {
    fontSize: 12,
    color: '#71816B',
    marginTop: 5,
  },

  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  menuTitle: {
    fontSize: 19,
    color: '#315C43',
    fontWeight: 'bold',
  },

  count: {
    color: '#8AA574',
    fontSize: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E7ECDD',
    elevation: 2,
  },

  drinkImage: {
    width: '100%',
    height: 125,
    backgroundColor: '#E5EDD9',
  },

  cardInfo: {
    padding: 11,
  },

  name: {
    color: '#394B38',
    fontSize: 13,
    fontWeight: 'bold',
    minHeight: 34,
  },

  detail: {
    color: '#A0A897',
    fontSize: 10,
    marginTop: 5,
  },

  price: {
    color: '#D27C4B',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 9,
  },

  empty: {
    textAlign: 'center',
    color: '#829078',
    padding: 25,
  },

  thanks: {
    backgroundColor: '#315C43',
    padding: 17,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },

  thanksText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
});
