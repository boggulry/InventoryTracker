// screens/InventoryScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const InventoryScreen = ({ inventory, updateInventory }) => {
  const [editItem, setEditItem] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedQuantity, setEditedQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setEditItem(item);
        setEditedName(item.name);
        setEditedQuantity(item.quantity.toString());
        setModalVisible(true);
      }}
    >
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
    </TouchableOpacity>
  );

  const handleEditItem = () => {
    // Find the index of the item being edited
    const index = inventory.findIndex((item) => item.id === editItem.id);
    // Create a copy of the inventory array
    const updatedInventory = [...inventory];
    // Update the item's name and quantity
    updatedInventory[index].name = editedName;
    updatedInventory[index].quantity = parseInt(editedQuantity);
    // Update the inventory state
    updateInventory(updatedInventory);
    setModalVisible(false);
  };

  const handleDeleteItem = () => {
    // Filter out the item being deleted
    const updatedInventory = inventory.filter((item) => item.id !== editItem.id);
    // Update the inventory state
    updateInventory(updatedInventory);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Screen</Text>
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              value={editedName}
              onChangeText={setEditedName}
            />
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              value={editedQuantity}
              onChangeText={setEditedQuantity}
              keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
              <Button title="Edit Item" onPress={handleEditItem} />
              <Button title="Delete Item" onPress={handleDeleteItem} />
            </View>
          </View>
        </View>
      </Modal>
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
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default InventoryScreen;
