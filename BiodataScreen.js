import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function BiodataScreen() {
  const data = {
    nama: 'Dicko Azrinaldi',
    nim: '120140127',
    kelas: 'Pengembangan Aplikasi Mobile RB',
    foto: require('./Profile.jpg')
  };

  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={data.foto} />
      <Text style={styles.nama}>{data.nama}</Text>
      <Text style={styles.nim}>{data.nim}</Text>
      <Text style={styles.kelas}>{data.kelas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nim: {
    fontSize: 18,
    marginBottom: 5,
  },
  kelas: {
    fontSize: 18,
  },
});
