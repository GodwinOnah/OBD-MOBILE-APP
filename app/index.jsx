import { StatusBar } from 'expo-status-bar';
import {ScrollView, View,Text, ImageBackground} from 'react-native';
import {Link,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from './accessories/customButton'


export default function App() {

  return (
   <SafeAreaView className="bg-primary, h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <ImageBackground source={images.Obande2} style={{flex:1,width: '100%', height: '100%'}}>
            <View className="w-full h-full flex-1 items-center justify-center">
                <Text className="text-7xl font-pblack justify-center text-blue"
                      style={{ color:"blue"}}>
                  Godwin
                </Text>
                <Text className="text-4xl items-center justify-center text-[40px] text-white">
                  Welcoms you {"\n"} warmly
                </Text>
                <CustomButton 
                title="Start"
                handlePress={()=>router.push('/home')}
                containerStyle="w-[200px] h-[60px] mt-[100px] bg-ash-100 rounded-[200px]"
                textStyles=" italic text-white text-[30px] font-pregular p-auto"
                isLoading={false}
                />
                {/* <Link href="/home" style={{fontSize:40, marginTop:200, color:"white",backgroundColor:"black"}}>
                    <Text >
                      Start &gt;
                    </Text>
                </Link> */}
               
                <StatusBar style={{ style:"light",backgroundColor:"black"}}/>
            </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
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