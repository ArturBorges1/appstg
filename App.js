import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';


export default function App() {
  const [selectedValue, setSelectedValue] = useState("individual");    
  const [number, setNumber] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
            <View style={styles.header}>
              <Image style={styles.logo} source={require('./assets/stg_logo.png')} />
            </View>
            <Text style={styles.frase}>Escolha o plano funeral</Text>
            <View style={{borderWidth: 2, borderColor: 'white', borderRadius: 10, marginTop: 10}}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: 'Plano individual', value: 'individual' },
                  { label: 'Plano Familiar', value: 'familiar' },
                  { label: 'Plano Cremação', value: 'cremacao' },
                ]}
                style={pickerSelectStyles}
                placeholder={{
                  label: 'Selecione o plano funeral...',
                  value: null,
                }}
              />
            </View>      
            <Text style={styles.frase}>
              Idade do titular
            </Text>
            <Text style={styles.aviso}>Apenas maiores de idade...</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={number}
                onChangeText={text => setNumber(text)}
                placeholder="Digite idade do titular..."
                placeholderTextColor="#FFFFFF"
                keyboardType="numeric"
              />
            </View>                    
            <Separator />
            <View style={{padding: 30}}>
              <View>
                  <Text style={styles.dependente_label}>Idade do Dependente 1:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setNumber1(text)}
                    value={number1}            
                    placeholder="Digite..."
                    placeholderTextColor="#FFFFFF"
                    keyboardType="numeric"
                  />  
              </View>
              <View>
                  <Text style={styles.dependente_label}>Idade do Dependente 2:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setNumber2(text)}
                    value={number2}            
                    placeholder="Digite..."
                    placeholderTextColor="#FFFFFF"
                    keyboardType="numeric"
                  />  
              </View>
              <View>
                  <Text style={styles.dependente_label}>Idade do Dependente 3:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setNumber3(text)}
                    value={number3}            
                    placeholder="Digite..."
                    placeholderTextColor="#FFFFFF"
                    keyboardType="numeric"
                  />  
              </View>
              <View>
                  <Text style={styles.dependente_label}>Idade do Dependente 4:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setNumber4(text)}
                    value={number4}            
                    placeholder="Digite..."
                    placeholderTextColor="#FFFFFF"
                    keyboardType="numeric"
                  />  
              </View>
              <View>
                  <Text style={styles.dependente_label}>Idade do Dependente 5:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setNumber5(text)}
                    value={number5}            
                    placeholder="Digite..."
                    placeholderTextColor="#FFFFFF"
                    keyboardType="numeric"
                  />  
              </View>            
            </View>
            <Button              
              onPress={() => calcular_valor_contrato(selectedValue, number, [number1, number2, number3, number4, number5])}
              title="Calcular valor do contrato"
            />
            <StatusBar style="auto" />
          </View>
    </ScrollView>    
  );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f5eac'    
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#323259',
    height: 100,    
  },
  logo: {
     height: 90,
     width: 200,      
  },
  frase: {
    marginTop: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'    
  },
  aviso: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',    
  },
  dependente_label: {
    color: 'white',
    fontSize: 12,    
    marginTop: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },  
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // Para ícones e chevrons
  },
  inputAndroid: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // Para ícones e chevrons99    
  },
});

function calcular_valor_contrato(plano, idade_titular, idade_dependentes){  
  if(plano === null || plano === undefined){
    Alert.alert('Selecione o plano!');
    return;
  }
  if(idade_titular === null || idade_titular === undefined){
    Alert.alert('Digite a idade do titular!');
    return;
  }
  if(idade_titular < 18){
    Alert.alert('O titular deve ser maior de idade!');
    return;
  }
  let valor_titular = 0;
  let valor_total_dependentes = 0;
  let valor_total = 0;  
  if(plano == 'individual' || plano == 'familiar'){
    if(idade_titular >= 18 && idade_titular <= 59){
      valor_titular = 22;
    }
    if(idade_titular >= 60 && idade_titular <= 79){
      valor_titular = 50;
    }
    if(idade_titular > 80){
      valor_titular = 80;
    }
  }
  if(plano == 'cremacao'){
    if(idade_titular >= 18 && idade_titular <= 59){
      valor_titular = 40;
    }
    if(idade_titular >= 60 && idade_titular <= 79){
      valor_titular = 60;
    }
    if(idade_titular > 80){
      valor_titular = 100;
    }
  }
  if(plano == 'familiar'){
    for(let i in idade_dependentes){
      let valor_deste_dependente = 0;
      if(idade_dependentes[i] > 79){
        Alert.alert("Dependente "+(i+1)+": não pode ter mais de 79 anos!");
        return;
      }
      if(idade_dependentes[i] <= 17){
        valor_deste_dependente = 3;      
      }
      if(idade_dependentes[i] >= 18 && idade_dependentes[i] <= 49){
        valor_deste_dependente = 7;      
      }
      if(idade_dependentes[i] >= 18 && idade_dependentes[i] <= 49){
        valor_deste_dependente = 7;      
      }
      if(idade_dependentes[i] >= 50 && idade_dependentes[i] <= 59){
        valor_deste_dependente = 9;      
      }
      if(idade_dependentes[i] >= 60 && idade_dependentes[i] <= 69){
        valor_deste_dependente = 12;      
      }
      if(idade_dependentes[i] >= 70 && idade_dependentes[i] <= 79){
        valor_deste_dependente = 32;      
      }
      valor_total_dependentes += valor_deste_dependente;
    }
  }  
  valor_total = valor_titular + valor_total_dependentes;
  Alert.alert("Valor do titular: "+formatarParaReais(valor_total));  
}

function formatarParaReais(numero) {
  return numero.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
