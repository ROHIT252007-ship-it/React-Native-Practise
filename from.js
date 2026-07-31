import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const Fromdata = () => {
    const [name,setname]=useState('');
    const [age,setage]=useState('');
    const [email,setemail]=useState('');
  const fromdata = async () => {
    const data = {
      name,
      age,
      email
    };

    const url = "http://10.0.2.2:3000/user";

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      console.log("HTTP Status:", response.status);
      let result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
   
    <View style={{ padding: 20 }}>
         <TextInput
         placeholder="enter your name"
         style={styles.TextInput}
         onChangeText={(name)=>setname(name)}
          />
         <TextInput
         placeholder="enter your age" 
         style={styles.TextInput}
          onChangeText={(age)=>setage(age)}
         />
         <TextInput
         placeholder="enter your email"
         style={styles.TextInput}
          onChangeText={(email)=>setemail(email)}
          />
      <Button title="Send Data" onPress={fromdata} />
  
    </View>
  );
};


const styles=StyleSheet.create(
    {
        TextInput:{
            borderWidth:2,
            borderColor:'red',
            margin:10
        }
    }
)

export { Fromdata };
