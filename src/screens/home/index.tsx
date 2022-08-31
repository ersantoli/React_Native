
import{  Text, View,TextInput,TouchableOpacity, FlatList,Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../componets/Participant';
import React from 'react';

export default function Home(){

  const participants = ['Erick','Santos','Oliveira','Mateus','marcos','lucas','João','Atos','Paulo'];
  

function handleParticipantAdd(){
  if(participants.includes("Erick")){
    return Alert.alert("Erro", "participante ja na lista");
    
  }
    console.log("clicou!");
}
function handleParticipantRemove(name: string){
  Alert.alert('REMOVER', `Deseja remover ${name}?`,[
    {
      text:'Sim',
      onPress:() => Alert.alert("Deletado")
    }, {
      text:'Não',
       style:'cancel'
    }
  ]);
  console.log(`removeu! ${name}`);
}

  return(
  <View style={styles.container}> 
  
  
  <Text style={styles.eventDate}>
  Nome do Evento
  </Text>

  <Text style={styles.eventName}>Sexta,3 de Novembro de 2022</Text>



<View style=
{styles.form}>
    
  <TextInput
   style={styles.input} 
  placeholder ="Nome do Participante"
  placeholderTextColor="white"
  />

  <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
    <Text style={styles.buttonText}>
       +
    </Text>
  </TouchableOpacity>
</View>





<FlatList
data={participants}
keyExtractor={item => item}
renderItem ={({item})=>(
  <Participant
key={item}
 name={item}
  onRemove={() =>handleParticipantRemove(item)}
  />
)}
ListEmptyComponent = { () =>(
<Text
style={styles.listEmptyText}
>
  Nenhum item foi adicionado ainda a lista, Lista vazia

</Text>
  )}
/>
  </View>
  
  )
}