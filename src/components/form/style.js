import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
     addTask:{
        bottom:30,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",

     },
     input:{
        height:44,
        width:'80%',
        backgroundColor:'#fff',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#21abd0',
        paddingHorizontal:20,
        paddingVertical:10,
     },
     iconWrapper:{
        width:44,
        height:44,
        backgroundColor:'#21abd0',
        borderRadius:44,
        alignItems:"center",
        justifyContent:"center"
     },
     icon:{
        fontSize:24,
        color:'#fff',
        
     }
})
export default styles;