
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Dynamic = () => {
    const [value,setvalue]=useState(1)
    const language=[
        {
            id:1,
            langu:'java'
        },
            {
            id:2,
            langu:'php'
        },    {
            id:3,
            langu:'html'
        },    {
            id:4,
            langu:'sql'
        },    {
            id:5,
            langu:'react js'
        },
    ]
    return (
        <View style={{
            backgroundColor: 'lightgreen'
        }}>
            {
                language.map((t,i)=> <TouchableOpacity 
                    key={i}
                    onPress={() => setvalue(t.id)}
                    >
                <View style={styles.main}>
                    <View style={styles.circle}>
                        {
                            value === t.id ? <View style={styles.circleu}></View> : null
                        }
                    </View>
                    <View><Text style={styles.rtext}>{t.langu}</Text></View>
                </View>
            </TouchableOpacity>
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        textAlign: 'center',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
        gap: 5

    },
    circle: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 10
    },
    circleu: {
        height: 14,
        width: 14,
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 1

    }

})

export { Dynamic }