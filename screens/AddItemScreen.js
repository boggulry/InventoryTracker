// screens/AddItemScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AddItemScreen = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = () => {
    // Validate inputs
    if (!itemName.trim() || !quantity.trim()) {
      alert('Please enter item name and quantity.');
      return;
    }

    // Call the onAddItem function passed as prop
    onAddItem({
      id: Math.random().toString(),
      name: itemName,
      quantity: parseInt(quantity),
    });

    // Clear input fields after adding item
    setItemName('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleAddItem} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default AddItemScreen;
