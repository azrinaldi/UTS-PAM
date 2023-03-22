import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format } from 'date-fns';
import * as Calendar from 'expo-calendar';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [calendarId, setCalendarId] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        const calendar = calendars.find(cal => cal.title === 'Nama Kalender Anda');
        if (calendar) {
          setCalendarId(calendar.id);
          const calendarEvents = await Calendar.getEventsAsync(
            calendar.id,
            new Date(),
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          );
          setItems(calendarEvents);
        }
      }
    })();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Detail', { item })}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{format(new Date(item.startDate), 'dd/MM/yyyy')}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  date: {
    fontSize: 14,
    marginTop: 5,
  },
});
