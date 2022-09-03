import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex:1,    
      marginTop:10,
      textAlign:'center',
      backgroundColor:'black',
  
    },
    eventDate:{ color:'aqua',
    fontSize:20,
    fontWeight:'bold',
    textShadowColor: 'blue',
    textShadowOffset: { width: 4.5, height: 2.5 },
     textShadowRadius: 15,
    padding:10,
    textAlign:'center',
    marginTop:10,
  
    },
    eventName:{
      color:'white',
      fontSize:16,
      fontWeight:'bold',
      marginTop:10,
      textAlign:'center',
      
  
    },
    input:{
        flex:1,
        marginRight:8,
        height: 56,
        backgroundColor:'#1f1e25',
        borderRadius:5,
        color:'#fff',
        padding:6,
        fontSize:16,
        margin:10,
    },
    buttonText: {
        color:'white', 
        fontSize:24,
       
        
       
    },
    button:{
        width:56,
        height:56,
        backgroundColor:'#40E0D0',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',  
        borderWidth: 2,    
        margin:10,
         },
        
 form:{
            width:'100%',
            flexDirection:'row',
            marginTop:36,
         }, 
         listEmptyText:{
          color:'red',
          fontSize:14,
          textAlign:'center',
         },
         garbage:{
          width:35,
          height:35,
          
           },
  })