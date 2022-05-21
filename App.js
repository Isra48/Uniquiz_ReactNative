import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Pressable , Alert } from 'react-native';
import { backgroundColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useFonts, Montserrat_400Regular} from '@expo-google-fonts/inter';
import { normalizeRect } from 'react-native/Libraries/StyleSheet/Rect';



export default function App() {
  return (
    <View style={styles.container}>
       {/* Aqui va el header*/}
      <Text style={styles.titulo}>Sign in/ Sign up</Text>

    {/* Aqui empieza el form */}
      <View style={styles.form}>
      <Text style={styles.label}>Email</Text>
        <TextInput
        style={styles.input}
        keyboardType="email-address"
       />
         <Text style={styles.label}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        keyboardType="visible-password"
       />
      <Pressable style={styles.btn1} >
      <Text style={styles.textbtn1}>Submit</Text>
    </Pressable>


      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0012',
    paddingVertical: 110,
    paddingHorizontal:20
    
  },
  titulo:{
    color: '#E5E5E5',
    fontSize: 25,
    justifyContent:'flex-start',
    margin:10


  },

  form:{
    marginVertical: 20,

  },


  label:{
    color: '#FF3860',
    marginHorizontal: 5,
    marginBottom: -8,
  },

  input:{
    color:'white',
    fontSize: 20,
    borderColor:'#FF3860',
    height: 40,
    margin: 5,
    marginVertical: 15,
    borderWidth: .5,
    padding: 5,
    
  },

  btn1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#15EB59',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
 
  },


});
