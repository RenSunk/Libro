import Firebase from "./Firebase"

export default async function Datos(){
     Firebase.database().ref("Categorias").on("value", (sna) => {
         sna
    })

}