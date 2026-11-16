
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function BottomMenu() {
  const [selected, setSelected] = useState(0);

  const menus = [
    { icon: '⌂', name: 'Trang chủ' },
    { icon: '▤', name: 'Sản phẩm' },
    { icon: '♡', name: 'Yêu thích' },
    { icon: '◉', name: 'Cá nhân' }
  ];

  return (
    <View style={styles.container}>
      {menus.map((item, index) => {
        const active = selected === index;

        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => setSelected(index)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.icon,
              active && styles.active
            ]}>
              {item.icon}
            </Text>

            <Text style={[
              styles.label,
              active && styles.active
            ]}>
              {item.name}
            </Text>

            {active && (
              <View style={styles.indicator} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#354638',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18
  },

  item: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    fontSize: 22,
    color: '#B9C1B5'
  },

  label: {
    fontSize: 10,
    color: '#B9C1B5',
    marginTop: 4
  },

  active: {
    color: '#E6B58F',
    fontWeight: 'bold'
  },

  indicator: {
    width: 17,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#E6B58F',
    marginTop: 3
  }
});
