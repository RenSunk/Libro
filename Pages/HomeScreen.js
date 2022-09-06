import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Firebase from "../database/Firebase"

export function HomeScreen({navigation}) {

    const [data, setdata] = useState([])

    useEffect(()=>{
        Firebase.database().ref("Categorias").on("value", (sna) => {
            setdata(sna.val())
       })
     },[])

    return (
        <View style={styles.container}>
            {
                Object.keys( data ).map((values)=>{
                    return (
                        <TouchableOpacity style={{width:80, height:80, margin:10}} onPress={()=> navigation.navigate("Lista") }>
                            <View style={styles.circulo}  />
                            <Text style={{textAlign:"center", margin:5}}> {values}</Text>
                        </TouchableOpacity>
                    )
                }) 
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#CACACA',
        flexWrap:"wrap",
        flexDirection:"row"
    },

    circulo:{
        
        width: 80,
        height: 80,
        backgroundColor: "#fff",
        borderRadius: 100
    }
  });
  
export default HomeScreen