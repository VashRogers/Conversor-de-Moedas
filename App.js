import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';

//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        
      <Conversor moedaA='USD' moedaB='BRL' />
      <Conversor moedaA='EUR' moedaB='BRL' />

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});

export default App