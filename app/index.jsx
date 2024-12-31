import {ScrollView, View,Text, ImageBackground,StatusBar } from 'react-native';
import {router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/customButton'


export default function App() {

  return (
   <SafeAreaView className="h-full" style={{ backgroundColor:'#161622'}}>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <ImageBackground source={images.Obande2} style={{flex:1,width: '100%', height: '100%'}}>
            <View className="w-full h-full flex-1 items-center justify-center">
                <Text className="text-7xl font-pblack justify-center">
                 Welcome
                </Text>

                <CustomButton 
                title="Start"
                handlePress={()=>router.push('/signin')}
                containerStyle="w-[200px] h-[60px] mt-[100px] bg-ash-100 rounded-[200px]"
                textStyles=" italic text-white text-[30px] font-pregular p-auto"
                isLoading={false}
                />              
                <StatusBar style={{ style:"light",backgroundColor:"black"}}/>   {/*Status bar from react-native*/}
            </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}