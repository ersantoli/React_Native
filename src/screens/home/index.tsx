import{  Text, View,TextInput,TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../componets/Participant';
export default function Home(){

function handleParticipantAdd(){
    console.log("clicou!");
}
function handleParticipantRemove(name: string){
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
<Participant name="Erick" onRemove={() =>handleParticipantRemove("erick")} />

  </View>
  
  )
}