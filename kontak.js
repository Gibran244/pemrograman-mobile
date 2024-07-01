
// components/kontak.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Kontak = ({ gambar, judul, telpon }) => {
  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.image} />
      <Text style={styles.title}>{judul}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Kontak;
