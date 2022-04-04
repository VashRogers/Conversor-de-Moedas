import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native'
import { styles } from './styles';
import api from '../services/api'



//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad



class Conversor extends Component{
  constructor(props){
    super(props);
    this.state={
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor:0,
      valorConvertido:0,
    };
    this.converter = this.converter.bind(this);

  }
  async converter(){
    
    let de_para = this.state.moedaA+'_'+this.state.moedaB;
    const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`)
    let cotacao = response.data[de_para];

    let resultado = (cotacao*parseFloat(this.state.moedaB_valor));
    this.setState({
      valorConvertido: resultado.toFixed(2)
    })

    Keyboard.dismiss();
  }
  
  
  render(){
    const {moedaA, moedaB} = this.props;
    return(
      <View>

        <Text style={styles.titulo}>{moedaA} to {moedaB}</Text>
        <TextInput placeholder='Digite o valor a ser convertido' style={styles.areaInput} onChangeText={(moedaB_valor)=> this.setState({moedaB_valor})} keyboardType='numeric' />

        <View style={styles.botaoArea}>
          <TouchableOpacity onPress={this.converter}>
          <Text style={styles.botaoTexto}>Convert</Text>
         </TouchableOpacity>
        </View>
        
        <Text style={styles.valorConvertido}>{(this.state.valorConvertido == 0)? '' : 'R$'+this.state.valorConvertido}</Text>


      </View>
    )
  }

}




export default Conversor