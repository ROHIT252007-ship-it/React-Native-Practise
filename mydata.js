
import React, { useEffect, useState } from "react"
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";


const Mydata = () => {
    const [data, setdata] = useState([]);
    const [showmodal, setshowmodal] = useState(false);
    const [newuser, setnewuser] = useState(undefined);
    const [s, sets] = useState();
    const Apicalling = async () => {
        const url = "http://10.0.2.2:3000/user";
        var r = await fetch(url);
        r = await r.json();
        setdata(r);
    }

    const deletedata = async (id) => {
        const url = `http://10.0.2.2:3000/user/${id}`;
        var r = await fetch(url,
            {
                method: "DELETE"
            }
        );
        r = await r.json();

        Apicalling();

    }

    const update = async (data) => {
        setshowmodal(true);
        setnewuser(data);

    }

    const searchuser = async (text) => {
        const url = `http://10.0.2.2:3000/user?q=${text}`;
        var r = await fetch(url);
        r = await r.json();
        setdata(r);
    }

    useEffect(() => {
        Apicalling();
    }, [])

    return (
        <View>
            <TextInput style={styles.TextInput}
                placeholder="seacrh data"
                onChangeText={(search) => searchuser(search)} />

            {
                data ?
                    data.map(
                        (item) => <View
                            style={styles.listbox}
                            key={item.id}
                        >
                            <Text>{item.name}</Text>
                            <Text>{item.age}</Text>
                            <Text>{item.email}</Text>
                            <Button title="delete"
                                onPress={() => deletedata(item.id)}
                            />
                            <Button title="update" onPress={() => update(item)} />
                        </View>
                    ) : null
            }
            <View style={styles.mainbox}>
                <View>
                    <Text>rohit</Text>
                    <Modal transparent={true}
                        visible={showmodal}
                    >
                        <Modaal setshowmodal={setshowmodal} newuser={newuser} Apicalling={Apicalling} />
                    </Modal>
                </View>
            </View>

        </View>
    )
}

const Modaal = (props) => {
    const [name, setname] = useState(undefined);
    const [age, setage] = useState(undefined);
    const [email, setemail] = useState(undefined);


    useEffect(() => {
        setname(props.newuser.name)
        setage(props.newuser.age)
        setemail(props.newuser.email)
    }, [props.newuser]);

    const updatedata = async () => {
        const id = props.newuser.id;
        const url = `http://10.0.2.2:3000/user/${id}`;
        var r = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age, email })
        }
        );
        r = await r.json();

        props.Apicalling();

    }


    return (<View style={styles.modall}>
        <View style={styles.modalbox}>
            <TextInput
                placeholder="enter your name"
                style={styles.TextInput}
                onChangeText={(name) => setname(name)}
            />
            <TextInput
                placeholder="enter your age"
                style={styles.TextInput}
                onChangeText={(age) => setage(age)}
            />
            <TextInput
                placeholder="enter your email"
                style={styles.TextInput}
                onChangeText={(email) => setemail(email)}
            />
            <Button title="update data"
                style={styles.btn}
                onPress={() => {
                    updatedata()
                    props.setshowmodal(false)
                }}
            />

        </View>
    </View>)
}
const styles = StyleSheet.create(
    {
        listbox: {
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            borderColor: 'black',
            borderWidth: 2,
            padding: 10,
            alignItems: "center"
        },
        mainbox: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        },
        modall: {
            flex: 1,

            justifyContent: "center",
            alignItems: "center"
        },
        modalbox: {
            height: 300,
            width: 300,
            backgroundColor: 'white',
            borderWidth: 2,
            borderRadius: 10,
            justifyContent: "center",
            padding: 10
        },
        TextInput: {
            borderWidth: 2,
            borderColor: 'black',
            marginVertical: 10
        },
        btn: {
            margin: 10
        }

    }
)



export { Mydata }