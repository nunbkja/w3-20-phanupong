import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Rectangle(){


    const[area, setArea] = useState(0) // area = 20 x , setArea(20) /
    const[width, setWidth] = useState(0)
    const[length, setLength] = useState(0)

    function rectangleCal(){
        var resuit = width * length
        setArea(resuit)
    }

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>คํานวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="ไปปหน้า 2"/> */}

            <Text>ความกว้าง คือ {width} ซม</Text>
            <Text>ความยาว คือ {length} ซม</Text>
            <Text>พื้นที่สี่เหลี่ยม คือ {area} ตร.ซม</Text>

            <TextInput style={styles.textInput} 
             placeholder= "กรอกความกว้าง"
             placeholderTextColor ="blue" 
             value={width.toString()}
             onChangeText={(w) =>setWidth(Number(w))}
             />

            <TextInput style={styles.textInput} 
            placeholder= "กรอกความยาว" 
            placeholderTextColor = "blue"
            value={length.toString()}
            onChangeText={(l) =>setLength(Number(l))}
            />

            <Button title="คํานวณ" onPress={() => rectangleCal()} />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"black"
    },
    textInput:{
        borderWidth: 1,
        borderColor : "white",
        width:"80%",
        borderRadius: 20
    }
})