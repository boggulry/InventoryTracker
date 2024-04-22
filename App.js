// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import InventoryScreen from './screens/InventoryScreen';
import AddItemScreen from './screens/AddItemScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [inventory, setInventory] = useState([]);

  const handleAddItem = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const updateInventory = (updatedInventory) => {
    setInventory(updatedInventory);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inventory') {
              iconName = 'home';
            } else if (route.name === 'Add Item') {
              iconName = 'plus';
            } else if (route.name === 'Profile') {
              iconName = 'account';
            }

            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#7f8c8d',
        })}
      >
        <Tab.Screen name="Inventory">
          {() => <InventoryScreen inventory={inventory} updateInventory={updateInventory} />}
        </Tab.Screen>
        <Tab.Screen name="Add Item">
          {() => <AddItemScreen onAddItem={handleAddItem} />}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => <ProfileScreen inventory={inventory} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
