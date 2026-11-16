
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Category({
  categories,
  selected,
  onSelect
}) {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => {
        const active = selected === item;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect(item)}
            style={[
              styles.button,
              active && styles.activeButton
            ]}
          >
            <Text style={[
              styles.text,
              active && styles.activeText
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 14
  },

  button: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#EAE3D8'
  },

  activeButton: {
    backgroundColor: '#526957'
  },

  text: {
    fontSize: 12,
    color: '#756E64'
  },

  activeText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});

