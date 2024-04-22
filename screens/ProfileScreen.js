// screens/ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ inventory }) => {
  // Calculate total inventory count
  const totalInventoryCount = inventory.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.text}>Total Inventory Count: {totalInventoryCount}</Text>
      {/* Add more profile information here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
