import { View, Text, Image, Button, StyleSheet, TextInput, FlatList, ScrollView, SectionList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { input, mahajan } from './style';
import Useefect from './useefect';
import { Hide, Toggle } from './hst';
import { Rediobtn } from './rediobtn';
import { Dynamic } from './dynemicredio';
import { Modeel } from './model';
import { Api } from './apicall'
import { Fromdata } from './from'
import { Mydata } from './mydata'
import { AsyncStore } from './asyncStoreage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const App = () => {

  const Cn = createNativeStackNavigator();
  const tabb = createBottomTabNavigator();
  const tabt = createMaterialTopTabNavigator();

  return (

    <NavigationContainer>
      {/* <Cn.Navigator>
        <Cn.Screen name='log in' component={Login} />
        <Cn.Screen name='Home' component={Home} />
      </Cn.Navigator> */}

      <tabt.Navigator>
        {/* <tabt.Screen name='log in' component={Login} /> */}
        <tabt.Screen name='Home' component={Home} />
        <tabt.Screen name='api call' component={Api} />
        <tabt.Screen name='FROM' component={Fromdata} />
        <tabt.Screen name='MyData' component={Mydata} />
        <tabt.Screen name='AsyncStoreage' component={AsyncStore} />
      </tabt.Navigator>

    </NavigationContainer>


  );
}


// inter stylesheet prectices
const style = StyleSheet.create({
  text: {
    fontSize: 50
  }
}
)

//props prectics
const Props = (data) => {
  return (
    <View>
      <Text style={{
        fontSize: 30
      }}>{data.name2}</Text>
    </View>
  )
}
{/*this is user define componets below */ }
const MyDetails = () => {
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center'
      }}>prectic of user define componets</Text>
      <Text>rohit</Text>
      <Text>age:18</Text>
      <Text>my full name is a rohit gyanshwar mahajan</Text>
    </View>
  )
}


const Om = () => {
  const mainlist = [
    {
      id: 1,
      name: "rohit"
    },
    {
      id: 2,
      name: "om"
    }, {
      id: 3,
      name: "mahajan"
    }, {
      id: 4,
      name: "karan"
    }, {
      id: 5,
      name: "nikhil"
    },
  ]
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center'
      }}>FlatList</Text>
      <FlatList
        data={mainlist}
        renderItem={({ item }) =>
          <Text>{item.name}</Text>
        }
      >

      </FlatList>
      <Text style={{
        fontSize: 30,
        textAlign: 'center'
      }}>map</Text>      <ScrollView>
        {
          mainlist.map((t) =>
            <Text>{t.name}</Text>)
        }
        <Text style={{
          fontSize: 30,
          textAlign: 'center'
        }}>gird prectices</Text>
      </ScrollView>
    </View>
  )
}


const Gird = () => {
  const girdlist = [
    {
      id: 1,
      user: 'rohit'
    },
    {
      id: 2,
      user: 'nikhil'
    }, {
      id: 3,
      user: 'karan'
    }, {
      id: 4,
      user: 'om'
    }, {
      id: 5,
      user: 'kapil'
    }, {
      id: 6,
      user: 'lalit'
    }, {
      id: 7,
      user: 'daksh'
    }, {
      id: 8,
      user: 'prem'
    }, {
      id: 9,
      user: 'rahul'
    }, {
      id: 10,
      user: 'janvi'
    }, {
      id: 11,
      user: 'gita'
    }, {
      id: 12,
      user: 'rakesh'
    }, {
      id: 13,
      user: 'ganesh'
    }, {
      id: 14,
      user: 'dipak'
    },
  ]
  return (
    <View style={{
      flex: 1, flexDirection: 'row', flexWrap: 'wrap'
    }}>

      {
        girdlist.map(
          (t) => <Text style={{
            width: 90,
            height: 90,
            backgroundColor: 'red',
            margin: 10,
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>
            {t.id}.{t.user}
          </Text>
        )
      }

    </View>
  )
}



const
  Loop = () => {
    const loopArray = [
      {
        name: 'rohit',
        gmali: 'rohitmahajan@gmail.com'
      },
      {
        name: 'om',
        gmali: 'ommahajan@gmail.com'
      },
      {
        name: 'nikhil',
        gmali: 'nikhil@gmail.com'
      },
      {
        name: 'karan',
        gmali: 'karan@gmail.com'
      }
    ]
    return (
      <View

      >
        <Text style={{
          fontSize: 30,
          textAlign: 'center'
        }}>loop</Text>
        <FlatList

          data={loopArray}
          renderItem={({ item }) =>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text>{item.name}</Text>
              <Text>{item.gmali}</Text>
            </View>
          }
        />
      </View>
    )
  }


const Celectionlist = () => {
  const celectionarray = [
    {
      name: 'rohit',
      data: ['java', 'html', 'css']
    },
    {
      name: 'nikhil',
      data: ['java', 'fullter', 'css']
    }, {
      name: 'karan',
      data: ['java', 'figma', 'css']
    }
  ]
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center'
      }}>SectionList</Text>
      <SectionList
        sections={celectionarray}
        renderItem={({ item }) =>
          <Text>{item}</Text>
        }
        renderSectionHeader={({ section: { name } }) => (
          <Text style={
            {
              fontSize: 20,
              color: 'red'
            }
          }>{name}</Text>)
        }
      ></SectionList>
    </View>
  )
}

const Home = () => {
  // const {user}=props.route.params
  const [name, setname] = useState("rohit");

  const rohit = () => {
    setname("om");
  }

  return (
    <View>
      <ScrollView>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
        }}>Hello
        </Text>
        <Text style={{
          fontSize: 30,
          textAlign: 'center'
        }}>image</Text>
        <Image
          source={require('./asset/image.jpeg')}></Image>
        <Button
          title='cilck me'
          onPress={() => rohit()}
          color={'navy'}
        ></Button>
        <MyDetails />
        {/*this is user define componets upper call*/}

        <Props name2={name} />
        <Text style={style.text}>rohit</Text>
        <Text style={mahajan.text}>mahajan</Text>
        <TextInput
          style={input.inputtext}
          placeholder='enter name'
          onChangeText={(t) => setname(t)}
        ></TextInput>
        <Button
          title='change name'
          onPress={() => setname('mahajan')}
        ></Button>
        <TextInput
          style={input.inputtext}
          placeholder='enter name'
          secureTextEntry={true}
          onChangeText={(t) => setname(t)}
        ></TextInput>
        <Om />
        <Gird />
        <Loop />
        <Celectionlist />
        <Useefect />
        <Hide></Hide>

        <Toggle></Toggle>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
        }}>redio btn
        </Text>
        <Rediobtn />
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
        }}>dynamic redio btn
        </Text>

        <Dynamic />
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
        }}>loder
        </Text>
        <ActivityIndicator size={50} />
        {/* <Modeel /> */}
      </ScrollView>
    </View>
  );
}



const Login = (props) => {
  const [user, setuser] = useState("");

  return (
    <View>
      {/* //   <TextInput 
    //   placeholder='enter user name'
    //   onChangeText={(text)=>setuser(text)}></TextInput>
    //   <Button
    //   title='next page'
    //   onPress={()=>props.navigation.navigate("Home",{user})}
    //   >
  

    //   </Button> */}
      <Text>login </Text>
    </View>
  )
}

export default App