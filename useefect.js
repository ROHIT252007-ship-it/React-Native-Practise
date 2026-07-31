import React, { useEffect } from "react";
import { Text, View } from "react-native";


 const Useefect =()=>{
    useEffect(()=>{
        console.warn("hello world!");
    },[])
    return(
        <View>
            <Text>
                rohit mahajan
            </Text>
        </View>
    )
}

export default Useefect;