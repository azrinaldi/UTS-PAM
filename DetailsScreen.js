import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>
        {format(new Date(item.startDate), 'dd/MM/yyyy')} -{' '}
        {format(new Date(item.endDate), 'dd/MM/yyyy')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
});
