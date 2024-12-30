import { StatusBar } from 'expo-status-bar';
import { View,Text, Button } from 'react-native';
import {Link} from 'expo-router';
import RootLayout from '../app/_layout';


export default function App() {

  return (
   
   <View className="flex-1 items-center justify-center colors-metal">
        <Text className="text-4xl font-pblack">
          Hello! Iam Godwin
        </Text>
        <Link href="/ed">
            <Text >
              Click 
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