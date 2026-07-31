import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStore = () => {
  const [name, setName] = useState('');

  const setdata = async () => {
    await AsyncStorage.setItem("name", "om");
    alert("Data saved");
  };

  const getdata = async () => {
    const storedName = await AsyncStorage.getItem("name");
    console.log(storedName);
    setName(storedName);
};

const removedata = async ()=> {
    await AsyncStorage.removeItem("name");
    setName('');
  }

  return (
    <View style={{ padding: 20 }}>
      <Button title="Set Data" onPress={setdata} />
      <Button title="Get Data" onPress={getdata} />
      <Button title="remove Data" onPress={removedata} />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Stored Name: {name}</Text>
    </View>
  );
};

export { AsyncStore };
