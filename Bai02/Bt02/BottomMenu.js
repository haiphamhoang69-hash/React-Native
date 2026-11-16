
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
    { icon: '▤', name: 'Môn học' },
    { icon: '✎', name: 'Bài tập' },
    { icon: '◉', name: 'Cá nhân' }
  ];

  return (
    <View style={styles.container}>
      {menus.map((item, index) => {
        const isActive = selected === index;

        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => setSelected(index)}
          >
            <Text style={[
              styles.icon,
              isActive && styles.active
            ]}>
              {item.icon}
            </Text>

            <Text style={[
              styles.label,
              isActive && styles.active
            ]}>
              {item.name}
            </Text>

            {isActive && (
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
    backgroundColor: '#282522',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
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
    fontSize: 23,
    color: '#A9A198'
  },

  label: {
    fontSize: 10,
    color: '#A9A198',
    marginTop: 4
  },

  active: {
    color: '#E99B70',
    fontWeight: 'bold'
  },

  indicator: {
    width: 17,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#E99B70',
    marginTop: 4
  }
});
