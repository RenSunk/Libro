import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Firebase from "../database/Firebase";
import React, { useEffect, useState } from "react";

export default function ListaProducto({ navigation }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref("Categorias/Vinilos T1")
      .on("value", (sna) => {
        setdata(sna.val());
      });
  }, []);

  const numero = (Tnumero) =>{
    let string = Tnumero+""
    
    let punto = string.length - 3
    let precio = ""
    
    for(let i = 0; i < string.length; i++ ){
        
        if(i == punto && i > 0){
            precio = precio + "." +string[i]
        }else{
            precio = precio + string[i]
        }
        
    }

    return precio
  }

  return (
    <View style={styles.container}>
      {Object.keys(data).map((values) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("CrearEditar")}>
            <View style={styles.item}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.imagen} />
                <Text style={{ marginHorizontal: 5 }}> {values} </Text>
              </View>
            </View>

            <View style={styles.cantidades}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ width: "50%", textAlign: "center" }}>
                  Cantidad
                </Text>
                <Text style={{ width: "50%", textAlign: "center" }}>
                  Precio
                </Text>
              </View>

              {Object.keys(data[values]).map((value) => {
                return (
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ width: "50%", textAlign: "center" }}>
                      {value.replace("-", "/")}
                    </Text>
                    <Text style={{ width: "50%", textAlign: "center" }}>
                      {" "}
                      ${ numero(data[values][value]) }
                    </Text>
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("CrearEditar")}
      >
        <Text>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CACACA",
  },

  item: {
    backgroundColor: "#fff",
    height: 70,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  imagen: {
    height: 50,
    width: 50,
    backgroundColor: "#CACACA",
    borderRadius: 100,
  },

  boton: {
    height: 80,
    width: 80,
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    top: "85%",
    right: "5%",
    justifyContent: "center",
    alignItems: "center",
  },

  cantidades: {
    backgroundColor: "white",
    marginHorizontal: 18,
    paddingVertical: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
