import { useState } from "react"
import { Button, Text, View } from "react-native";

const Hide = () => {
    const[show, setshow] = useState(false);
    return (
        <View>
                 <Text
        style={{
            fontSize:30,
            textAlign:'center'
        }}
        >
                hide/show or toggle text
            </Text>
                {
                    show ? <Data />: null 
                }
            <Button title="show button"
            onPress={()=>setshow(true)}>              
            </Button>
            <Button title="hide button"
            onPress={()=>setshow(false)}></Button>
         
        </View>
    )
}

const Data =()=>{

return(
    <View>
        <Text
        style={{
            fontSize:30,
            textAlign:'center'
        }}
        >
            rohit
        </Text>
    </View>
)
}

const Toggle =()=>{
    const [show,setshow]=useState(false);
    return(
        <View>
            <Text
        style={{
            fontSize:30,
            textAlign:'center'
        }}
        
            >
                toggle 
            </Text>
            <Button title="toggle"
            onPress={()=>setshow(!show)}>

            </Button>
            {
                
                    show ? <Data2 />: null 
                 
            }
        </View>
    )
}
const Data2=()=>{
    return(
        <View>
             <Text
        style={{
            fontSize:30,
            textAlign:'center'
        }}
        >toggle</Text>
            
        </View>
    )
}
export {Hide,Toggle};