import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 15,
    
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-between"
      },
      itemTask:{
        flexDirection: "row",
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#ffae",
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      even:{
        backgroundColor:"red"

      },
      old:{
        backgroundColor:"green"

      },
      content:{
        textAlign:'center',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:10,

      }
})
export default styles;