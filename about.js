
// components/about.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const About = ({ route }) => {
  const { gambar, judul, telpon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.image} />
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.phone}>{telpon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  phone: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default About;
