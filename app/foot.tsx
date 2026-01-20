import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Rectangle(){


    const[foot, setfoot] = useState(0) 
    const[meter, setmeter] = useState(0)
    const[area, setarea] = useState(0) 
    

    function rectangleCal(){
        var resuit = foot * 0.3048
        setarea(resuit)
    }

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>เเปลงฟุตเป็นเมตร</Text>
            {/* <Button title="ไปหน้า 2"/> */}X

            <Text>ฟุต =  {foot} ซม</Text>
            <Text>เมตร = {area} ซม</Text>
            

            <TextInput style={styles.textInput} 
             placeholder= "กรอกฟุต"
             placeholderTextColor ="blue" 
             value={foot.toString()}         
             onChangeText={(f) =>setfoot(Number(f))}
             />

          

            <Button title="คํานวณ" onPress={() => rectangleCal()}  />
        </View>
    )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#FFD6E0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",

    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // shadow (Android)
    elevation: 5,
  },

  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },

  textInput: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#F4A6B8",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#FFF5F7",
    marginVertical: 15,
  },

  button: {
    width: "100%",
    backgroundColor: "#F78FB3",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
