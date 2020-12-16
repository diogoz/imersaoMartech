/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import {format} from 'date-fns';

interface listaTarefasInterface {
  titulo: string;
  data: Date;
}

const App = () => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [listaTarefas, setLIstaTarefas] = useState<
    Array<listaTarefasInterface>
  >([]);

  const gravarTarefa = () => {
    if (novaTarefa === ''){
      return false;
    }
    Keyboard.dismiss();
    setNovaTarefa('');
    const novaLista = [...listaTarefas];
    novaLista.unshift({
      titulo: novaTarefa,
      data: new Date(),
    });
    setLIstaTarefas(novaLista);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{padding: 16}}>
          <Image
            source={require('./assets/todo-list.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
        }}>
        <TextInput
          placeholder="Adicionar tarefa"
          style={{
            borderBottomColor: '#707070',
            borderBottomWidth: 1,
            flex: 1,
            marginLeft: 12,
          }}
          value={novaTarefa}
          onChangeText={(valor) => {
            setNovaTarefa(valor);
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#FFAA00',
            borderRadius: 26,
            width: 32,
            height: 32,
            alignItems: 'center',
            marginLeft: 15,
            justifyContent: 'center',
          }}
          onPress={() => {
            gravarTarefa();
          }}>
          <Text style={{color: '#fff', fontSize: 26}}>+</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      />

      <View style={{marginLeft: 16}}>
        {listaTarefas.map((item, index) => (
          <View
            key={'item' + index}
            style={{
              backgroundColor: '#f5f6f9',
              padding: 8,
              borderLeftWidth: 5,
              borderLeftColor: '#1ABC9C',
              marginBottom: 8,
            }}>
            <Text
              style={{textAlign: 'right', fontSize: 12, fontWeight: 'bold'}}>
              {format(item.data, 'dd/MM/yyyy HH:mm')}
            </Text>
            <Text style={{fontSize: 16}}> {item.titulo} </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default App;
