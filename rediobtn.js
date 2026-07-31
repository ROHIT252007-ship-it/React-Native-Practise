import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Rediobtn = () => {
    const [value, setvalue] = useState(1);
    return (
        <View style={{
            backgroundColor: 'lightgreen'
        }}>
            <TouchableOpacity onPress={() => setvalue(1)}>
                <View style={styles.main}>
                    <View style={styles.circle}>
                        {
                            value === 1 ? <View style={styles.circleu}></View> : null
                        }
                    </View>
                    <View><Text style={styles.rtext}>redio 1</Text></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setvalue(2)}>
                <View style={styles.main}>
                    <View style={styles.circle}>
                        {
                            value === 2 ? <View style={styles.circleu}></View> : null
                        }
                    </View>
                    <View><Text style={styles.rtext}>redio 2</Text></View>
                </View>
            </TouchableOpacity>
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

export { Rediobtn }