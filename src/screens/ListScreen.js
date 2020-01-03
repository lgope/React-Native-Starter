import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', Age: '20' },
    { name: 'Friend #2', Age: '45' },
    { name: 'Friend #3', Age: '32' },
    { name: 'Friend #4', Age: '27' },
    { name: 'Friend #5', Age: '53' },
    { name: 'Friend #6', Age: '30' },
    { name: 'Friend #7', Age: '65' },
    { name: 'Friend #8', Age: '44' },
    { name: 'Friend #9', Age: '23' }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.Age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
