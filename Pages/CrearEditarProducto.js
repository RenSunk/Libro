import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import Firebase from "../database/Firebase";

export default function CrearEditarProducto(){

    const [cantidades, setcantidades] = useState([])

    const [data, setdata] = useState([]);

    useEffect(() => {
        setcantidades([])
      Firebase.database()
        .ref("Categorias/Vinilos T1/Tonnertex")
        .on("value", (sna) => {
          Object.keys( sna.val() ).map((value)=>{
            setcantidades( array => [...array, {cantidad:value, precio: sna.val()[value]}] )
          })
        });
    }, []);
    
    return (
        <View style={styles.container}>

            <View>
                <Image 
                    style={styles.imagen}
                    source={{
                        uri:"https://ecommerce.productoselrecreo.com/backend/admin/backend/web/archivosDelCliente/items/images/20210108164246-Productos-Yogurt-YOGURT-MELOCOTON-4165-g-6320210108164246850.jpg"
                    }}                
                />
            </View>
            
            <TextInput
                style={styles.input}
                placeholder="Nombre Del Producto"
                keyboardType="text"
            />

            <Text>
                Cantidades:
            </Text>
            {
                cantidades.map((values, index)=>{
                    return (
                        <View style={{ flexDirection: "row", justifyContent:"space-around" }}>
                            <TextInput
                                style={ styles.input1 }
                                placeholder="Cantidad"
                                keyboardType="text"
                                value={values.cantidad}
                            />
                            <TextInput
                                style={ styles.input1 }
                                placeholder="Precio"
                                keyboardType="numeric"
                                value={values.precio+""}
                            />
                        </View>
                    )
                })
            }
            
            
            <View style={{alignItems:"center", marginVertical:10}}>
                <TouchableOpacity style={styles.agregar} onPress={ () => setcantidades( oldArray => [...oldArray, {cantidad: "", precio: ""} ]  )}>
                    <Text> + Agregar Nueva Cantidad</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#CACACA',
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    input1: {
        height: 40,
        width:"40%",
        marginVertical: 5,
        borderBottomWidth: 1,
        padding: 10,
    },
    imagen:{
        height: 150,
        width: 150,
        borderRadius:100,
    },
    agregar:{ 
        borderColor:"black", 
        borderWidth:1, 
        width:250, 
        height:50, 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius:10 
    }
})