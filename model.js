import { Modal, StyleSheet, Text, View } from "react-native"

const Modeel = () =>{
    return(
<View >
    <Modal style={styles.main}
    transparent={true}>
        <View style={styles.container}>
            <Text >
                rohit
            </Text>
        </View>
    </Modal>
</View>
    )
}

const styles=StyleSheet.create(
    {
        main:{
            justifyContent:"center",
            alignItems:"center"
         },
        container:{
            height:200,
            width:200,
            backgroundColor:'skyblue',
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center"
        }
    }
)
export {Modeel}