
import React, { useEffect, useState } from "react"
import { Button, Text, TextInput, View } from "react-native";


const Api = () =>{
 const [data,setdata]=useState();
 const [number,setnumber] = useState(1)
    const Apicalling =async () => {
const url = `https://jsonplaceholder.typicode.com/posts/${number}`;
        var r = await fetch(url);
        r= await r.json();
        setdata(r);
    }

    useEffect(()=>{
        Apicalling();
    },[])

    return(
        <View>
            {
                data ? <View>
                    <Text>{data.id}</Text>
                    <Text
                    style={
                        {
                            fontSize:20,
                            color:'red',

                            textAlign:'center'
                        }
                    }
                    >{data.title}</Text>
                    <Text>{data.body}</Text>
           

                </View>:null 
            }
            <TextInput 
            style={
                {
                    borderWidth:2,
                    margin:10
                }
                
            }
            placeholder="enter a url number"
onChangeText={(num) => {
  const n = parseInt(num);
  if (!isNaN(n)) {
    setnumber(n);
// trigger API again
  }
}}
            />

            
          <Button
          title="set"
          onPress={Apicalling()}
          />
        </View>
    )
}
export {Api}