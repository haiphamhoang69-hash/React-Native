
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const cookies = [
  {
    id: '1',
    name: 'Chocolate Chip Cookie',
    price: '25.000đ',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700',
    description: 'Bánh quy socola có lớp ngoài giòn nhẹ, bên trong mềm xốp và những hạt chocolate thơm ngon.'
  },
  {
    id: '2',
    name: 'Butter Cookie',
    price: '20.000đ',
    image: 'https://th.bing.com/th/id/OIP.VhartW3h5ArXb0mNWuLiWQHaLG?w=189&h=284&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Bánh quy bơ thơm béo, có màu vàng đẹp mắt, vị ngọt nhẹ và giòn tan.'
  },
  {
    id: '3',
    name: 'Oatmeal Cookie',
    price: '22.000đ',
    image: 'https://th.bing.com/th/id/OIP.9_cqO-IZ2EEbKMJbTFAq8wHaJ1?w=189&h=252&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Bánh quy yến mạch có vị thơm bùi, giòn ngon và hấp dẫn.'
  },
  {
    id: '4',
    name: 'Strawberry Cookie',
    price: '28.000đ',
    image: 'https://th.bing.com/th/id/OIP.Akr3iksoGacddVCp7zv7LgHaLH?w=189&h=283&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Bánh quy dâu có hương thơm dịu nhẹ và vị ngọt chua đặc trưng.'
  },
  {
    id: '5',
    name: 'Almond Cookie',
    price: '26.000đ',
    image: 'https://th.bing.com/th/id/OIP.lw2loOyDwD3fEOUa3JnoOwHaLH?w=189&h=283&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Bánh quy hạnh nhân có vị bùi thơm, giòn xốp và hấp dẫn.'
  },
  {
    id: '6',
    name: 'Double Chocolate Cookie',
    price: '30.000đ',
    image: 'https://th.bing.com/th/id/OIP.iXcjj7J6brn0Gssx1lHTawHaJQ?w=189&h=236&c=7&r=0&o=7&pid=1.7&rm=3',
    description: 'Bánh quy socola đậm vị, thơm béo dành cho những người yêu thích chocolate.'
  },
];

export default function ListScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Thế giới bánh quy 🍪
      </Text>

      <Text style={styles.subtitle}>
        Chọn chiếc bánh bạn yêu thích nhé!
      </Text>

      <View style={styles.grid}>
        {cookies.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate('Detail', { cookie: item })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.content}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>

              <Text style={styles.more}>
                Xem chi tiết →
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EF',
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#70452C',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#92745D',
    marginTop: 8,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 18,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 130,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#70452C',
    minHeight: 38,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B36C3E',
    marginTop: 5,
  },
  more: {
    color: '#A66B45',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
