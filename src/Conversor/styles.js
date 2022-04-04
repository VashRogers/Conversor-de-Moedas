import React from "react";
import { StyleSheet } from "react-native";
import { shadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const styles = StyleSheet.create({
  texto:{
    color:'red'
  },
  titulo:{
    fontSize:35,
    fontStyle:'italic',
    color:'#ffc700',
    fontWeight:'bold'
    
  },
  areaInput:{
    
    padding:6,
    borderColor:'#fce300',
    borderWidth:0.3,
    marginTop:20,
    backgroundColor:'#9e9999',
    textAlign:'center',
    fontSize:16,
    color:'white',
  },
  botaoArea:{
    width:60,
    height: 20,
    borderWidth:0.5,
    borderColor:'#fce300',
    borderRadius:30,
    backgroundColor:'#fce300',
    marginTop:15,
    alignSelf:'center',
    shadowColor:'black',
    elevation:5
  },
  botaoTexto:{
    textAlign:'center',
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#fff'
    
  },
  valorConvertido:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    margin:15,
    color:'#ffc700',
  },

})

