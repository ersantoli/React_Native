
import{  Text, View,TextInput,TouchableOpacity, FlatList,Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../componets/Participant';
import React, {useState}  from 'react';


export default function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');
  const [participantsNameErased, setParticipantsNameErased] = useState<string[]>([]);
  
  

function handleParticipantAdd(){
  if(participantsName == ""){
    return Alert.alert("Erro", "Nenhum item foi adicionado");
  }else{
  if(participants.includes(participantsName)){
    return Alert.alert("Erro", "participante ja na lista");
    
  }
  setParticipants(prevState=>[...prevState,participantsName]);
  setParticipantsName('');
  console.log(participants);
}
}
function handleParticipantRemove(name: string){
 
  function sendToGarbage(){
    setParticipants(prevState => prevState.filter(participant => participant != name))
    setParticipantsNameErased(prevStates=>[...prevStates,participantsName])
    console.log("Chegou aqui")
    console.log(`${setParticipantsNameErased}`)// Problema
  }


  Alert.alert('REMOVER', `Deseja remover ${name}?`,[
    {
      text:'Sim',
      onPress:() => sendToGarbage()//Problema
      
      
    }, {
      text:'Não',
       style:'cancel'
    }
  ]);
  console.log(`removeu! ${name}`);
  console.log(setParticipantsNameErased)
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
  onChangeText={ setParticipantsName}
  value={participantsName}
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