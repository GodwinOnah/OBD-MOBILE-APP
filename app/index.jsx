import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, Button } from 'react-native';
import {Link} from 'expo-router'

export default function App() {

  return (
   <View style={styles.container}>
                <Text style={styles.text}>
                    Hello! Iam Godwin
                </Text>
                <Link href="/ed">
                  <Button style={styles.button}>About Me</Button>
                  </Link>
                <Link href="/ed">
                <Button style={styles.button}>Contact</Button>
                </Link>
                <Link href="/ed">
                <Button style={styles.button}>Biography</Button>
                </Link>
                <Link href="/ed">
                <Button style={styles.button}>Why Me</Button>
                </Link>
                <StatusBar style='auto'/>
              </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        display: 'grid'
    },
    button:{
      height:40
    },
    text: {
      fontSize: 40,
      lineHeight: 32,
      marginTop: 6,
    },
  });