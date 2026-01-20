import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import {router, useRouter} from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.contaniner}>
            <Text style={styles. mainTitle}>Home</Text>
            <Button title="ไปหน้าคํานวณพื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/rectangle')}/> 
            <Button title="ไปหน้าคํานวณฟุตเป็นเมตร" onPress={() => router.navigate('/foot')} /> 
        </View>

    )

}





const styles = StyleSheet.create({
    contaniner: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    textInput: {
        borderWidth: 1,
        width: "80%",
        borderColor: "green"
    }
})
    