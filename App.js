/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListSites from './components/list';
import ListFooter from './components/footer';
import ListHeader from './components/header';
import AddItemButton from './components/AddItemButton';
import {  TextInput,  FlatList } from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedValue, setSelectedValue] = useState("java");
  const [items, setItems] = useState([]); // État de la liste
  const [newItem, setNewItem] = useState(''); // État du contenu à ajouter


  const handleAddItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem(''); // Vider le champ de saisie
    }
  };

  useEffect(() => {
    console.log('Liste mise à jour :', items);
  }, [items]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      
      <ListHeader />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.headerButtons}>
        </View>
        <View style={styles.container}>
        </View>
        <View style={styles.container}>
      <AddItemButton
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItem={handleAddItem}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
        
        
        
      </ScrollView>
      <ListFooter />
    </SafeAreaView>
  );
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 36,
    lineHeight: 64,
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 500,
    marginVertical: 10,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    width: '80%',
    height: 50,
  },
  footer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
