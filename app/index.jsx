import { StatusBar } from 'expo-status-bar';
import { View,Text, Button } from 'react-native';
import {Link} from 'expo-router';
import RootLayout from '../app/_layout';


export default function App() {

  return (
   
   <View className="flex-1 items-center justify-center"  
          style={{backgroundColor:"skyblue"}}>
        <Text className="text-7xl font-pblack justify-center"
              style={{ color:"blue"}}>
           Godwin
        </Text>
        <Text className="text-4xl font-pblack justify-center">
           Welcoms you
        </Text>
        <Link href="/profile" style={{fontSize:20, marginTop:200, color:"purple"}}>
            <Text >
              Continue &gt;
            </Text>
        </Link>
        <StatusBar style='auto'/>
    </View>

    
  );
}

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent:'center',
//         display: 'grid'
//     },
//     button:{
//       height:40
//     },
//     text: {
//       fontSize: 40,
//       lineHeight: 32,
//       marginTop: 6,
//     },
//   }
//   );